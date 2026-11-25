import { mkdirSync, writeFileSync } from "node:fs";

// Tell a Whole Story in 32 Characters — make.fun
// One Wi-Fi name, 29 characters: a deadpan fact that carries a whole
// post-divorce scene (Mom renamed/locked the network after Dad left).
// Calibration: micro-anecdote that sounds true — named people, one
// specific action, no explaining, no punchline, one concept only.
const ENTRY = "Mom changed it after Dad left";

// The gate allows 1–32 characters; refuse to write anything outside it.
if (ENTRY.length < 1 || ENTRY.length > 32 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-32 non-blank characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
