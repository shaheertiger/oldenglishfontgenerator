# About Old English Font Generator

> Who runs Old English Font Generator, why it focuses only on blackletter, and how the Unicode mapping behind every style actually works.

- **URL**: https://www.oldenglishfontgenerator.com/about

---

One independent developer builds and maintains this site. It does a single job: turning ordinary text into Old English, blackletter and gothic lettering you can paste anywhere, and explaining honestly what that text can and can't do.

## Why a site about only one style

Most text generators throw dozens of unrelated styles onto one page. People looking for blackletter usually have a specific goal: a name for a tattoo consultation, a bio that fits Instagram's limit, a Discord display name, a heading for a certificate. Focusing on one family lets each page answer those questions properly, from the 32-character Discord limit to why Unicode has no blackletter digits.

## How the Unicode mapping works

Nothing here installs a font. Unicode includes two complete blackletter alphabets meant for mathematics: Mathematical Fraktur (U+1D504–U+1D537) and Mathematical Bold Fraktur (U+1D56C–U+1D59F). When you type an A, the generator swaps it for U+1D504, 𝔄. Five regular capitals, ℭ ℌ ℑ ℜ ℨ, were encoded earlier in the Letterlike Symbols block, so the generator uses those.

Accented letters are split into a base letter and a separate accent mark before conversion, which is how umlauts survive. Frames, crosses and underlines are extra symbols or combining marks placed around the converted letters. Because the result is ordinary text, it pastes into any app that accepts typing, but its exact look depends on the fonts installed on the reader's device.

The image export on the [text to image](https://www.oldenglishfontgenerator.com/old-english-text-to-image) page and the [tattoo preview](https://www.oldenglishfontgenerator.com/old-english-tattoo-font) draw real blackletter typefaces, UnifrakturCook and UnifrakturMaguntia, published under the SIL Open Font License and hosted on this site.

## How the site is run

- Conversion happens in your browser. Text you type is not sent to our server.
- The site is free and supported by advertising. There are no accounts or paid tiers.
- We use analytics to see which pages are useful. See the [privacy policy](https://www.oldenglishfontgenerator.com/privacy) for details.
- We don't publish ratings or reviews we haven't collected, and we correct mistakes when they're pointed out.

## Contact

Email [hello@oldenglishfontgenerator.com](mailto:hello@oldenglishfontgenerator.com) or use the [contact page](https://www.oldenglishfontgenerator.com/contact).
