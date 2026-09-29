#!/usr/bin/env python3
"""Merge per-locale translation part files into data/blog.<locale>.json.

Translators write one file per chunk; this assembles them in the canonical order of
data/blog.json, keeps any posts already translated, and refuses to write a file that
would silently lose or duplicate a post.

Usage: python3 scripts/merge_blog_parts.py <parts-dir>
"""
import json
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"


def load(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def main(parts_dir: str) -> int:
    parts = Path(parts_dir)
    order = [p["slug"] for p in load(DATA / "blog.json")]
    rank = {slug: i for i, slug in enumerate(order)}

    by_locale: dict[str, list] = {}
    for path in sorted(parts.glob("blog.*.json")):
        # blog.<locale>.<part>.json
        bits = path.name.split(".")
        if len(bits) != 4:
            print(f"skip (unexpected name): {path.name}")
            continue
        by_locale.setdefault(bits[1], []).extend(load(path))

    failed = False
    for locale, posts in sorted(by_locale.items()):
        existing = DATA / f"blog.{locale}.json"
        if existing.exists():
            have = {p["slug"] for p in posts}
            posts += [p for p in load(existing) if p["slug"] not in have]

        unknown = [p["slug"] for p in posts if p["slug"] not in rank]
        dupes = [s for s, n in Counter(p["slug"] for p in posts).items() if n > 1]
        if unknown or dupes:
            print(f"FAIL  blog.{locale}.json  unknown={unknown} duplicate={dupes}")
            failed = True
            continue

        posts.sort(key=lambda p: rank[p["slug"]])
        existing.write_text(json.dumps(posts, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"ok    blog.{locale}.json  ({len(posts)}/{len(order)} posts)")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1]))
