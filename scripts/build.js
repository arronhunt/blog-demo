// This should build and deploy to webflow
const showdown = require("showdown");
const fs = require("fs");
const path = require("path");

const TEST_FILE_NAME = "First blog post";

console.log("Converting...");
let html;
try {
  const converter = new showdown.Converter();
  const text = fs.readFileSync(
    path.resolve(__dirname, `../test/${TEST_FILE_NAME}.md`),
    "UTF-8"
  );
  html = converter.makeHtml(text);
  console.log(html);
} catch (error) {
  console.log("ERROR:", error);
}

console.log("Building...");
try {
  fs.writeFileSync(
    path.resolve(__dirname, `../html/${TEST_FILE_NAME}.html`),
    html
  );
  console.log("✅ Success");
} catch (error) {
  console.log("ERROR:", error);
}

console.log("Deploying...");
// TODO
