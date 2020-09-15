// This should build and deploy to webflow
const showdown = require("showdown");
const fs = require("fs");
const path = require("path");

console.log("Converting...");
let html;
try {
  const converter = new showdown.Converter();
  const text = fs.readFileSync(
    path.resolve(__dirname, "../test/First blog post.md"),
    "UTF-8"
  );
  html = converter.makeHtml(text);
  console.log(html);
} catch (error) {
  console.log("ERROR:", error);
}

console.log("Building...");
// TODO

console.log("Deploying...");
// TODO
