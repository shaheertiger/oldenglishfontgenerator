# Binary Code Translator

> Free binary code translator. Convert text to binary and decode binary back to text instantly. 8-bit ASCII/Unicode, copy and paste, runs in your browser.

- **URL**: https://www.oldenglishfontgenerator.com/binary-code-translator

---

Convert text into binary, or decode binary back into readable text. Switch direction, type or paste, and copy the result. The translation runs entirely in your browser.

Example: `Hello` → `01001000 01100101 01101100 01101100 01101111`

## How binary represents text

Computers store every character as a number. This translator uses each character’s Unicode code point and writes it as an 8-bit binary value — so the letter `A` (code point 65) becomes `01000001`. Space-separating each byte keeps the output readable and lets the decoder split it back apart cleanly.

## Decoding binary

To go the other way, paste groups of binary digits separated by spaces. The decoder reads each group as a base-2 number and maps it back to its character. Standard ASCII characters fit in 8 bits; characters above code point 255 are written with as many bits as they need.

## Common uses

Students use it to learn how text maps to bits, hobbyists hide short messages in binary, and developers use it to sanity-check character encoding. Because nothing is uploaded, it’s safe for quick, private conversions.
