import fs from "node:fs";

const html = fs.readFileSync("out/index.html", "utf8");

const hasPixel =
  html.includes("fbq('init'") ||
  html.includes('id="meta-pixel"') ||
  html.includes("connect.facebook.net");

if (!hasPixel) {
  console.error("Meta Pixel missing from out/index.html");
  process.exit(1);
}

console.log("Meta Pixel found in static export");
