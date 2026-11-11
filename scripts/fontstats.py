#!/usr/bin/env python3
"""Regenerate lib/fontstats.json: measured data for every font in lib/realfonts.ts.

For each family it reads Google Fonts' METADATA.pb (designer, licence, date
added, weights, axes, subsets) and opens the first font file with fontTools to
count glyphs and check which characters are actually drawn (long s, eszett,
umlauts, extended Latin). These are our own measurements, shown on /fonts/*.

    python3 -m venv .venv && .venv/bin/pip install fonttools
    .venv/bin/python scripts/fontstats.py
"""
import json, os, re, tempfile, urllib.request
from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = open(os.path.join(ROOT, "lib", "realfonts.ts"), encoding="utf8").read()
families = re.findall(r'family: "([^"]+)"', src)
cache = os.path.join(tempfile.gettempdir(), "oefg-fonts")
os.makedirs(cache, exist_ok=True)

out = {}
for fam in families:
    d = re.sub(r"[^a-z0-9]", "", fam.lower())
    meta = lic = None
    for lic in ("ofl", "apache", "ufl"):
        try:
            meta = urllib.request.urlopen(f"https://raw.githubusercontent.com/google/fonts/main/{lic}/{d}/METADATA.pb", timeout=30).read().decode()
            break
        except Exception:
            pass
    if not meta:
        raise SystemExit(f"No Google Fonts metadata for {fam}")
    fn = re.findall(r'filename: "([^"]+)"', meta)[0]
    path = os.path.join(cache, fn)
    if not os.path.exists(path):
        urllib.request.urlretrieve(f"https://raw.githubusercontent.com/google/fonts/main/{lic}/{d}/{fn}", path)
    font = TTFont(path, lazy=True)
    cmap = font.getBestCmap()
    has = lambda s: all(ord(c) in cmap for c in s)
    axes = re.findall(r'tag: "wght"\s*\n\s*min_value: ([\d.]+)\s*\n\s*max_value: ([\d.]+)', meta)
    weights = sorted(set(int(w) for w in re.findall(r"^\s+weight: (\d+)", meta, re.M)))
    out[fam] = {
        "license": lic.upper(),
        "added": re.search(r'^date_added: "([^"]+)"', meta, re.M).group(1),
        "weights": f"{int(float(axes[0][0]))}–{int(float(axes[0][1]))} (variable)" if axes else ", ".join(map(str, weights)),
        "italic": 'style: "italic"' in meta,
        "glyphs": font["maxp"].numGlyphs,
        "chars": len(cmap),
        "longS": has("ſ"),
        "german": has("ÄÖÜäöüß"),
        "latinExt": has("ąčěłňřšžőű"),
        "digits": has("0123456789"),
    }
    print(fam, out[fam])

with open(os.path.join(ROOT, "lib", "fontstats.json"), "w", encoding="utf8") as f:
    json.dump(out, f, indent=1, ensure_ascii=False)
    f.write("\n")
