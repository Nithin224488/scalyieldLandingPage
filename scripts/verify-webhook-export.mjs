import fs from "node:fs";
import path from "node:path";

const chunksDir = path.join("out", "_next", "static", "chunks");
const files = fs.readdirSync(chunksDir).filter((f) => f.endsWith(".js"));

const found = files.some((file) => {
  const content = fs.readFileSync(path.join(chunksDir, file), "utf8");
  return content.includes("script.google.com/macros");
});

if (!found) {
  console.error(
    "Google Sheets webhook URL missing from build output.\n" +
      "Set NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL in GitHub → Settings → " +
      "Secrets and variables → Actions → Variables, then re-run the deploy workflow.",
  );
  process.exit(1);
}

console.log("Google Sheets webhook URL found in static export");
