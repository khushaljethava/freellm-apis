#!/usr/bin/env python3
"""Structural check on data/blog.<locale>.json against data/blog.json.

A translation that drifts structurally breaks silently: a changed slug detaches the post
from its hreflang cluster, a dropped table pipe wrecks the renderer, a translated model
ID makes the code samples wrong. Prose quality is a human call; this catches the
mechanical failures.

Design note: translators are allowed to translate comments and prose string payloads
inside fenced code (a prompt, a greeting, an error message). So rather than guess which
quoted runs are prose, this blanks every string literal and instead asserts that the
things that must never change survive: URLs, model IDs, env var names and the code's
line structure.

Run: python3 scripts/check_blog_translations.py
"""
import json
import re
import sys
from collections import Counter
from pathlib import Path

DATA = Path(__file__).resolve().parent.parent / "data"
COPY_VERBATIM = ("slug", "date", "lastUpdated", "author", "tags")

FENCE = re.compile(r"```.*?```", re.S)
INLINE = re.compile(r"`[^`\n]+`")
# Stop at a backtick or a quote: markdown wraps URLs in those, and swallowing the
# delimiter makes two identical URLs compare unequal.
URL = re.compile(r"""https?://[^\s)"'`\],]+""")
COMMENT = re.compile(r"(?:#|//).*$", re.M)
STRING = re.compile(r'"[^"\n]*"|\'[^\'\n]*\'')
# llama-3.3-70b-versatile, gemini-2.0-flash. The digit requirement is what separates a
# model ID from ordinary hyphenated English ("day-to-day", "tokens-per-second"), which a
# translator is supposed to translate. Dotted call paths and hostnames are covered by the
# code-shape and URL checks, so they are deliberately not matched here.
MODEL_ID = re.compile(r"\b[a-z][a-z0-9]*(?:-[a-z0-9]+)*-[a-z0-9]*\d[a-z0-9]*(?:[-.][a-z0-9]+)*\b")
# GROQ_API_KEY, OPENAI_BASE_URL
ENV_VAR = re.compile(r"\b[A-Z][A-Z0-9]*(?:_[A-Z0-9]+){1,}\b")


def code_shape(fence: str) -> str:
    """A fenced block reduced to what a translator must not alter: its code structure,
    with comments dropped and every string literal blanked."""
    return STRING.sub('""', COMMENT.sub("", fence))


def without_fences(md: str) -> str:
    return FENCE.sub("\n", md)


def structure(md: str) -> dict:
    return {
        "code": [code_shape(f) for f in FENCE.findall(md)],
        "urls": sorted(URL.findall(md)),
        "model ids": sorted(Counter(MODEL_ID.findall(md)).items()),
        "env vars": sorted(Counter(ENV_VAR.findall(md)).items()),
        "h2": md.count("\n## "),
        "h3": md.count("\n### "),
        "bullets": len(re.findall(r"^- ", md, re.M)),
        "table_rows": [len(l.split("|")) for l in md.splitlines() if l.strip().startswith("|")],
    }


def check(locale: str, src_by_slug: dict) -> list[str]:
    path = DATA / f"blog.{locale}.json"
    errs, posts = [], json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(posts, list) or not posts:
        return [f"{path.name}: expected a non-empty array"]
    for i, post in enumerate(posts):
        tag = f"{path.name}[{i}]"
        slug = post.get("slug")
        src = src_by_slug.get(slug)
        if src is None:
            errs.append(f"{tag}: slug {slug!r} does not exist in blog.json — hreflang will not link up")
            continue
        for key in COPY_VERBATIM:
            if key in src and post.get(key) != src[key]:
                errs.append(f"{tag} {slug}: {key} must be copied verbatim, got {post.get(key)!r}")
        for key in ("title", "description", "content"):
            if not post.get(key):
                errs.append(f"{tag} {slug}: missing {key}")
            elif post[key] == src[key] and key != "content":
                errs.append(f"{tag} {slug}: {key} is still the English source")
        want, got = structure(src["content"]), structure(post.get("content", ""))
        for key in want:
            if want[key] != got[key]:
                errs.append(f"{tag} {slug}: markdown {key} differs — source {want[key]!r}, translation {got[key]!r}")
        if len(src.get("faq", [])) != len(post.get("faq", [])):
            errs.append(f"{tag} {slug}: faq length changed")
        translated_body = without_fences(post.get("content", ""))
        for code in INLINE.findall(without_fences(src["content"])):
            if code not in translated_body:
                errs.append(f"{tag} {slug}: inline code {code} was altered or dropped")
    return errs


def main() -> int:
    src_by_slug = {p["slug"]: p for p in json.loads((DATA / "blog.json").read_text(encoding="utf-8"))}
    files = sorted(DATA.glob("blog.*.json"))
    if not files:
        print("no translation files found")
        return 0
    failed = False
    for path in files:
        locale = path.stem.split(".")[1]
        errs = check(locale, src_by_slug)
        posts = json.loads(path.read_text(encoding="utf-8"))
        print(f"{'FAIL' if errs else 'ok  '}  {path.name}  ({len(posts)} posts)")
        for e in errs:
            print(f"      {e}")
        failed |= bool(errs)
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
