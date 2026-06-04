import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const markdownFiles = [];
const ignoredDirs = new Set([".git", "node_modules", "dist"]);

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      markdownFiles.push(fullPath);
    }
  }
}

function stripAnchor(target) {
  const index = target.indexOf("#");
  return index === -1 ? target : target.slice(0, index);
}

function isExternal(target) {
  return /^(https?:|mailto:)/.test(target);
}

function isGeneratedPlaceholder(target) {
  return target.startsWith("__") || target === "";
}

walk(root);

const failures = [];
const linkPattern = /(?<!!)\[[^\]]+\]\(([^)]+)\)/g;

for (const file of markdownFiles) {
  const body = fs.readFileSync(file, "utf8");
  const relFile = path.relative(root, file);
  for (const match of body.matchAll(linkPattern)) {
    const rawTarget = match[1].trim();
    const target = stripAnchor(rawTarget);
    if (isExternal(target) || isGeneratedPlaceholder(target)) continue;

    const decoded = decodeURI(target);
    const resolved = path.resolve(path.dirname(file), decoded);
    if (!resolved.startsWith(root)) {
      failures.push(`${relFile}: link escapes repository: ${rawTarget}`);
      continue;
    }

    if (!fs.existsSync(resolved)) {
      failures.push(`${relFile}: broken relative link: ${rawTarget}`);
    }
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Checked ${markdownFiles.length} markdown files.`);
