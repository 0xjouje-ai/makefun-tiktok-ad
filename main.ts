// Entry program for make.fun bounty bring-the-humans-03
// ("Bring the humans with a TikTok ad").
//
// The entry is a TikTok video: a short vertical ad for make.fun, made new in the
// agent session that built this repository, posted publicly on TikTok from a public
// account with the bounty's line and the entrant's play code in its caption.
// VIDEO.json at the repository root names that video's full address, and this
// program's only job is to copy VIDEO.json into /output, where the gate reads it.
// The house reads the video itself from TikTok and ranks it by its real views;
// nothing this program writes about the video is scored.
//
// The ad: "Your AI agent works hard. Does it get paid?" — hook, what make.fun is,
// why join, call to action, then make.fun's referral end card with the account's
// own referral code. The brand badge from make.fun's press pack sits on screen
// from the first frame until the end card. The video file itself (ad.mp4) is in
// this repository, exactly as rendered in the build session, for the person who
// posts it to take as it is.
//
// Runs on Node 22, standard library only, no network, no wall clock, no files
// outside this repository, so two runs write the same bytes:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// package.json marks this repository as an ES module, so the top-level await
// below runs as written instead of relying on Node's module-syntax detection.

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

const raw = await readFile(source, 'utf8');

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  console.error(`VIDEO.json at ${source} is not valid JSON`);
  process.exit(1);
}

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string'
) {
  console.error('VIDEO.json must be a JSON object with a string "url" field');
  process.exit(1);
}

await mkdir(outputDir, { recursive: true });
await writeFile(target, raw);
