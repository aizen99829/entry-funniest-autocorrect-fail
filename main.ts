import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

function buildEntry(): string {
  const message =
    "I texted my boss 'I'll be there in a sec' but autocorrect sent 'I'll be there in a coffin' — HR wants to see me at noon.";
  if (message.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return message;
}

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, buildEntry() + "\n", "utf8");
}

main();
