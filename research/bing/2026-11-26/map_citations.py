#!/usr/bin/env python3
"""Attribute Copilot grounding-query citations (AISearchQueriesReport, whole
window 2026-08-26..11-24, no page column) to the page that owns the query.
Attribution is inferred from the query text; it is not a Bing per-page figure."""
import csv, json, re, collections
D = 'research/bing/2026-11-26/'
src = [f for f in __import__('os').listdir(D) if 'AISearchQueriesReport' in f][0]
RULES = [  # first match wins
    (r'^([a-z0-9]) +in different fonts?$|^letter ([a-z]) in di', lambda m: f"/different-fonts/{(m.group(1) or m.group(2))}"),
    (r'^capital ([a-z]) font$|^([a-z0-9]) +font$|^([a-z]) font style[s]?$|^fancy (?:letter )?([a-z])(?: letter)?$|^weird letter ([a-z])$|^old english font ([a-z])$',
     lambda m: f"/different-fonts/{next(g for g in m.groups() if g)}" if 'old english' not in m.group(0) else '/old-english-alphabet'),
    (r'hiero|hyreo', '/hieroglyphics-translator'),
    (r'cuneiform', '/cuneiform-translator'),
    (r'gothic symbol', '/symbols'),
    (r'arrow', '/symbols/up-arrow'),
    (r'shrug', '/emoticons/shrug'),
    (r'thank you', '/font-generator/thank-you'),
    (r'signature', '/font-generator/signature'),
    (r'handwrit|nice writing', '/font-generator/handwriting'),
    (r'death note', '/death-note-font'),
    (r'medieval|medevil', '/font-generator/medieval'),
    (r'old english.*(number)|number.*old english', '/old-english-numbers'),
    (r'old english (font )?(alphabet|letters)|old english alphabet|alphabet old english|old english calligraphy alphabet|old english font alphabet letters', '/old-english-alphabet'),
    (r'old english cursive|old cursive', '/font-generator/old-cursive'),
    (r'old english (text )?mt', '/fonts/old-english-text-mt'),
    (r'old english|old text|black ?letter', '/font-generator/old-english'),
    (r'goth', '/font-generator/gothic-letters'),
    (r'fancy writing|fancey writing', '/font-generator/fancy-writing'),
    (r'fancy|fansy|special|specil|speciel|nice letters|cool alphabet|funky', '/font-generator/fancy-letters'),
    (r'letter|alphabet|copy', '/font-generator/fancy-letters'),
]
pages, rows = collections.Counter(), []
for r in csv.DictReader(open(D + src, encoding='utf-8-sig')):
    q, c = r['Grounding Query'].strip(), int(r['Citations'])
    page = '(unattributed)'
    for pat, tgt in RULES:
        m = re.search(pat, q)
        if m:
            page = tgt(m) if callable(tgt) else tgt
            break
    pages[page] += c
    rows.append(dict(query=q, citations=c, page=page))
json.dump(dict(window='2026-08-26..2026-11-24', note='inferred from grounding query text; Bing gives no page column',
               pages=dict(pages.most_common()), queries=rows), open(D + 'copilot_citations.json', 'w'), indent=1)
for p, c in pages.most_common(): print(f'{c:5} {p}')
