#!/usr/bin/env python3
"""Verify the built site's internal links and hreflang graph.

Run after `npm run build` in web/:
    python3 scripts/check_i18n.py

Catches the two ways multilingual SEO silently breaks:
  1. an <a href> or hreflang pointing at a page that was never built (soft 404s)
  2. a non-reciprocal hreflang cluster — if /es/ claims /de/ as an alternate,
     /de/ must claim /es/ back, or Google discards the whole cluster.
"""
import os
import re
import sys

DIST = os.path.join(os.path.dirname(__file__), "..", "web", "dist")
ASSET = re.compile(r"\.(xml|png|jpg|svg|css|js|txt|ico|webp|gif)$")
HREF = re.compile(r'href="(/[^"#?]*)"')
ALT = re.compile(r'<link rel="alternate" hreflang="([a-z-]+)" href="([^"]+)"')


def strip_host(url):
    return re.sub(r"^https?://[^/]+", "", url)


def load(dist):
    pages = {}
    for root, _, files in os.walk(dist):
        for f in files:
            if f.endswith(".html"):
                p = os.path.join(root, f)
                url = "/" + os.path.relpath(p, dist).replace(os.sep, "/")
                pages[url.replace("index.html", "") or "/"] = open(p, encoding="utf-8").read()
    return pages


def main():
    if not os.path.isdir(DIST):
        sys.exit(f"no build found at {DIST} — run `npm run build` in web/ first")
    pages = load(DIST)
    built = set(pages)
    errors = []

    for url, html in pages.items():
        for href in HREF.findall(html):
            if not ASSET.search(href) and href not in built:
                errors.append(f"{url}: dead link -> {href}")

    clusters = {}
    for url, html in pages.items():
        alts = {code: href for code, href in ALT.findall(html) if code != "x-default"}
        clusters[url] = alts
        for code, href in alts.items():
            if strip_host(href) not in built:
                errors.append(f"{url}: hreflang={code} -> unbuilt page {strip_host(href)}")

    for url, alts in clusters.items():
        for href in alts.values():
            other = strip_host(href)
            if other in clusters and other != url:
                if not any(strip_host(h) == url for h in clusters[other].values()):
                    errors.append(f"{url}: hreflang to {other} is not reciprocal")

    print(f"checked {len(pages)} pages")
    for e in sorted(errors)[:40]:
        print("FAIL", e)
    if errors:
        sys.exit(f"{len(errors)} problem(s)")
    print("OK: no dead links, hreflang complete and reciprocal")


if __name__ == "__main__":
    main()
