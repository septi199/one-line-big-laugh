# NOTES — One Line, Big Laugh

## Entry

> I bought a lie detector for date night; my girlfriend passed, my dog failed, and now only one of them is allowed on the couch.

- Characters: 126 (code points; gate is 1–200)
- Bytes: 126 (pure ASCII, no trailing newline)
- sha256 of `entry.txt`: `a0087e24736b5b8010d625ef798485045ae08d1a627a6beb0e1dd632d1f1d5a5`

## Why this line

- **Real joke, not an observation:** a lie-detector test on date night is a setup that demands a punchline, and the dog failing it delivers one.
- **Unexpected turn:** the reader expects the girlfriend to be the one in trouble; the dog failing — and the couch ban landing on the wrong species — flips the expected target.
- **Tight:** every clause earns its place (buy → test → pass/fail → consequence); nothing can be cut without losing the joke.
- **Fresh:** no recycled template, stock pun, or well-known joke structure; the specific absurd detail (a dog failing a polygraph on date night) is original.
- **Memorable:** one image — the dog banished to (or from) the couch — sticks after a single read.

## Implementation

`main.ts` is deterministic: it holds the entry as a constant, writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `/output/entry.txt`, the
path the kit's RULES.txt names), then reads the file back and throws unless
it is byte-identical to the intended entry and within the 1–200 character
gate. It prints the character count and sha256 of what it wrote.

Verified locally with `MAKEFUN_OUTPUT_DIR` pointed at a scratch directory:
two runs produced the identical sha256 above.
