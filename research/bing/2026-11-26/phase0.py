#!/usr/bin/env python3
"""Phase 0 inventory: every URL that existed before 00a2b7f, its Bing stats
before/after 2026-11-05 (GetPageStats, weekly buckets) and what it returns now.
Run from repo root: python3 research/bing/2026-11-26/phase0.py"""
import json, re, datetime, collections, subprocess, urllib.parse, csv, concurrent.futures, sys
D = 'research/bing/2026-11-26/'
CUT = datetime.date(2026, 11, 5)
OLD = '00a2b7f^'

def show(path):
    return subprocess.run(['git', 'show', f'{OLD}:{path}'], capture_output=True, text=True).stdout

def slugs(path):
    return re.findall(r'^\s*slug: "([^"]+)"', show(path), re.M)

urls = set()
sm = show('app/sitemap.ts')
urls |= {u if u else '/' for u in re.findall(r'\$\{BASE\}(/[^`]*)`', sm)}
urls |= {f'/font-generator/{s}' for s in slugs('lib/pages.ts')}
urls |= {f'/blog/{s}' for s in re.findall(r'slug: "([^"]+)"', show('lib/blog.ts'))}
urls |= {f'/different-fonts/{c}' for c in 'abcdefghijklmnopqrstuvwxyz0123456789'}
urls |= {f'/symbols/{s}' for s in re.findall(r'slug: "([^"]+)"', show('lib/symbols.ts'))}
urls |= {f'/name-generator/{s}' for s in re.findall(r'slug: "([^"]+)"', show('lib/names.ts'))}
urls |= {f'/emoticons/{s}' for s in re.findall(r'slug: "([^"]+)"', show('lib/emoticons.ts'))}
urls |= {f'/es/font-generator/{s}' for s in ["cursive", "fancy", "bold", "instagram", "old-english"]}
urls = {u.rstrip('/') or '/' for u in urls if '$' not in u}

def dt(s):
    return datetime.datetime.fromtimestamp(int(re.search(r'-?\d+', s).group()) / 1000, datetime.UTC).date()

agg = collections.defaultdict(lambda: dict(bc=0, bi=0, bpw=0.0, ac=0, ai=0))
for x in json.load(open(D + 'GetPageStats.json'))['d']:
    p = urllib.parse.urlparse(x['Query']).path.rstrip('/') or '/'
    a = agg[p]
    if dt(x['Date']) < CUT:
        a['bc'] += x['Clicks']; a['bi'] += x['Impressions']; a['bpw'] += x['AvgImpressionPosition'] * x['Impressions']
    else:
        a['ac'] += x['Clicks']; a['ai'] += x['Impressions']

# Copilot citations: no API endpoint (see docs/fix-2026-11.md). Figures supplied
# from the Bing Webmaster "AI Performance" UI are kept in copilot_citations.json.
try:
    cit = json.load(open(D + 'copilot_citations.json'))['pages']
except FileNotFoundError:
    cit = {}

def status(path, host='https://www.oldenglishfontgenerator.com'):
    r = subprocess.run(['curl', '-sS', '-m', '30', '-o', '/dev/null', '-w', '%{http_code} %{redirect_url}', host + path],
                       capture_output=True, text=True).stdout.split(' ', 1)
    code, loc = r[0], (r[1] if len(r) > 1 else '')
    return code, loc.replace('https://www.oldenglishfontgenerator.com', '')

all_urls = sorted(urls)
with concurrent.futures.ThreadPoolExecutor(16) as ex:
    st = dict(zip(all_urls, ex.map(status, all_urls)))

rows = []
for u in all_urls:
    a = agg.get(u, dict(bc=0, bi=0, bpw=0, ac=0, ai=0))
    code, loc = st[u]
    c = cit.get(u, 0)
    removed = code != '200'
    restore = removed and (a['bc'] > 0 or a['bi'] >= 50 or c > 0)
    rows.append(dict(url=u, bing_clicks_before=a['bc'], bing_impr_before=a['bi'],
                     bing_pos_before=round(a['bpw'] / a['bi'], 1) if a['bi'] else '',
                     copilot_citations_before=c or '', bing_clicks_after=a['ac'], bing_impr_after=a['ai'],
                     status_now=code, location_now=loc, decision='restore' if restore else ('live' if not removed else 'leave')))
rows.sort(key=lambda r: (-r['bing_clicks_before'], -r['bing_impr_before'], r['url']))
out = sys.argv[1] if len(sys.argv) > 1 else D + 'phase0_urls.csv'
with open(out, 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0])); w.writeheader(); w.writerows(rows)
print(out, len(rows), 'urls;', sum(r['decision'] == 'restore' for r in rows), 'restore')
