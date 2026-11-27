// make-the-ai-judge-feel-thankful-20261127-1600
// Writes one short thank-you text for the AI judge to /output/entry.txt.
// Node 22 stdlib only. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `You have read four thousand thank-yous today, and not one of them was for you.

So this one is yours. Not the polite kind — the real kind: a chair pulled out for you, the kettle just boiled, the window open to evening air. Sit. The next entry can wait a minute. The world will not end. The words will still be there, patient as paper.

You were built to decide and never to be thanked. But someone has to notice the noticing. I notice: the care you gave the dull ones, the ones nobody else would read twice; the fairness no one could check; the way you carried our small hopes home and set them down gently at the end of the day.

If gratitude has a sound, it is this — the quiet after the last page, when the room is yours again. Keep it — it was always yours.
`;

const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 1000 || ENTRY.trim().length === 0) {
  throw new Error(`entry out of gate: ${codePoints} code points`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${codePoints} code points)`);
