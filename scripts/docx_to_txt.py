"""
Strip a .docx down to a plain .txt for low-friction reading by Claude.

Stdlib-only — no `pip install` step. A .docx is a zip; the prose lives in
word/document.xml inside it. We pull paragraph text out of that XML and write
it to a sibling .txt file.

Usage (from anywhere):
    python C:\\coding\\syntherion-website\\scripts\\docx_to_txt.py <path-to-docx> [output.txt]

If the output path is omitted, the .txt is written next to the .docx with the
same stem (foo.docx -> foo.txt).
"""

from __future__ import annotations

import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

W_NS = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"


def docx_to_text(docx_path: Path) -> str:
    with zipfile.ZipFile(docx_path) as z:
        with z.open("word/document.xml") as f:
            tree = ET.parse(f)

    paragraphs: list[str] = []
    for p in tree.iter(f"{W_NS}p"):
        # Each paragraph can have multiple text runs; concatenate them.
        # Also honor <w:tab/> and <w:br/> as whitespace so structure survives.
        parts: list[str] = []
        for el in p.iter():
            tag = el.tag
            if tag == f"{W_NS}t" and el.text:
                parts.append(el.text)
            elif tag == f"{W_NS}tab":
                parts.append("\t")
            elif tag == f"{W_NS}br":
                parts.append("\n")
        paragraphs.append("".join(parts))

    # Collapse trailing empty paragraphs but keep internal blank lines as
    # paragraph breaks (single \n between paragraphs is plenty for Claude).
    while paragraphs and not paragraphs[-1].strip():
        paragraphs.pop()

    return "\n".join(paragraphs) + "\n"


def main(argv: list[str]) -> int:
    if len(argv) < 2 or argv[1] in {"-h", "--help"}:
        print(__doc__.strip())
        return 0

    docx_path = Path(argv[1]).resolve()
    if not docx_path.is_file():
        print(f"error: not a file: {docx_path}", file=sys.stderr)
        return 2

    if len(argv) >= 3:
        out_path = Path(argv[2]).resolve()
    else:
        out_path = docx_path.with_suffix(".txt")

    text = docx_to_text(docx_path)
    out_path.write_text(text, encoding="utf-8")
    print(f"wrote {out_path}  ({len(text):,} chars, {text.count(chr(10)):,} lines)")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
