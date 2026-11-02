# Next steps

What to do after this rebuild is deployed. The code side is done; these steps need you.

## 1. Search Console (day 1)

1. Open Google Search Console for `https://www.oldenglishfontgenerator.com`.
2. **Sitemaps** → remove the old sitemap entry if it's listed, then submit `sitemap.xml`. It now lists 25 URLs.
3. **URL Inspection** → request indexing, in this order:
   - `/`
   - `/old-english-tattoo-font`
   - `/old-english-alphabet`
   - `/gothic-font-generator`
   - `/fraktur-generator`
   - `/old-english-name-generator`
4. **Pages** report: expect a wave of "Not found (404/410)" and "Page with redirect" over the next weeks. That's intended (see `REDIRECTS.md`). Don't "fix" them.
5. Do the same in Bing Webmaster Tools, and run `npm run build && npm run indexnow` once to ping IndexNow.

## 2. Checks after deploy

- `curl -sI http://oldenglishfontgenerator.com/` should end at `https://www.oldenglishfontgenerator.com/` with one 301. If Vercel's domain settings already redirect the apex, that's fine too.
- Spot-check `/font-generator/tattoo` (301) and `/uuid-generator` (410).
- Run the Rich Results Test on `/` and one cluster page (FAQ, Breadcrumb, SoftwareApplication).

## 3. Things only you can add

- **A real name on /about.** The About page says one independent developer runs the site but gives no name, because we won't invent one. Adding your real name (and optionally a photo or a link to a profile) is the single biggest trust upgrade available.
- **Contact address.** Make sure `hello@oldenglishfontgenerator.com` actually receives mail.
- **Content updates.** When you edit a file in `content/pages/`, commit it, then run `npm run lastmod` and commit `lib/lastmod.json`, so the sitemap reports the real change date even on shallow CI clones.

## 4. Link building checklist

Do a few each week rather than all at once. Aim for relevant links, not volume.

- [ ] **Tattoo and lettering blogs.** Pitch the tattoo mockup + PNG export as a free resource for "planning your script tattoo" articles. Offer a short guest tip on blackletter spacing and sizing.
- [ ] **Calligraphy and hand-lettering communities.** Share the printable alphabet sheet where self-promotion is allowed.
- [ ] **Product Hunt.** Launch the tattoo preview / text-to-image tool (not the generic generator); it's the differentiated feature.
- [ ] **AI and tool directories.** Submit to free-tool directories (e.g. There's An AI For That–style lists, AlternativeTo as an alternative to other font generators, SaaSHub, Toolify).
- [ ] **Reddit.** r/Fonts, r/typography, r/tattoo and r/TattooDesigns. Answer existing questions ("what font is this", "how do I get Old English in my bio") and link only when it genuinely answers the question. Read each sub's rules first.
- [ ] **"Best Old English generator" listicles.** Search for those articles, email the authors with what's different here (tattoo mockup, numbers explainer, Discord/Instagram limit checkers, OFL image export).
- [ ] **Brand signals.** Create consistent profiles (Pinterest is a good fit for alphabet charts and tattoo previews; X/Bluesky optional) using the same name and linking to the homepage.
- [ ] **Unlinked mentions.** Every couple of months, search for the site name and ask for a link where it's mentioned without one.

## 5. What not to do

- Don't re-add unrelated tools "for traffic". Topic focus is the point of this rebuild.
- Don't bulk-bump dates in the sitemap.
- Don't add ratings or review schema unless you collect and show real ratings.
- Don't reintroduce `/es` unless every page is fully translated.
