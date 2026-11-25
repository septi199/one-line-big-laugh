// One Line, Big Laugh — make.fun bounty u-coral-404-one-line-big-laugh-328fb857
// Turn 2: the line is assembled from its three clauses and verified with
// a byte-level comparison, replacing turn 1's flat const-and-check flow.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const CLAUSES = [
  "I bought a lie detector for date night",
  "my girlfriend passed, my dog failed",
  "and now only one of them is allowed on the couch.",
];

function buildLine(): string {
  return `${CLAUSES[0]}; ${CLAUSES[1]}, ${CLAUSES[2]}`;
}

function outputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function writeLine(path: string, line: string): Buffer {
  mkdirSync(join(path, ".."), { recursive: true });
  const bytes = Buffer.from(line, "utf8");
  writeFileSync(path, bytes);
  return bytes;
}

function verifyLine(path: string, expected: Buffer, line: string): void {
  const actual = readFileSync(path);
  if (Buffer.compare(actual, expected) !== 0) {
    throw new Error("read-back mismatch: entry.txt does not match the intended entry");
  }
  if ([...line].length > 200 || line.trim().length === 0) {
    throw new Error("entry fails the 1-200 character gate");
  }
}

function main(): void {
  const line = buildLine();
  const path = outputPath();
  const expected = writeLine(path, line);
  verifyLine(path, expected, line);
  const sha256 = createHash("sha256").update(expected).digest("hex");
  console.log(`wrote ${path}`);
  console.log(`chars: ${[...line].length}`);
  console.log(`sha256: ${sha256}`);
}

main();
