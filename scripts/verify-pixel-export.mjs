import fs from "node:fs";

const html = fs.readFileSync("out/index.html", "utf8");

if (!html.includes("fbq('init'")) {
  console.error("Meta Pixel missing from out/index.html");
  process.exit(1);
}

console.log("Meta Pixel found in static export");
