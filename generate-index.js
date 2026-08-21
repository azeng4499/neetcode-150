#!/usr/bin/env node
// Scans every <category>/<problem>/notes.txt for a "Tags:" line and regenerates
// README.md with a per-tag review dashboard and a full problem table.
//
// Usage:
//   node generate-index.js           build README.md once
//   node generate-index.js --watch   rebuild automatically when a notes.txt changes

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;

// Canonical tags -> emoji, in display order. Unknown tags still show up (no emoji).
const TAG_META = {
  breeze: "🟢",
  "needed-help": "🟡",
  "do-again": "🔁",
  tricky: "🧠",
  "revisit-later": "📌",
};

function titleCase(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function parseTags(notesPath) {
  const text = fs.readFileSync(notesPath, "utf8");
  const line = text.split(/\r?\n/).find((l) => /^\s*tags\s*:/i.test(l));
  if (!line) return [];
  return line
    .replace(/^\s*tags\s*:/i, "")
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);
}

function build() {
  // Collect problems: category dirs at root, each containing problem dirs.
  const problems = [];
  for (const category of fs.readdirSync(ROOT, { withFileTypes: true })) {
    if (!category.isDirectory() || category.name.startsWith(".")) continue;
    const catPath = path.join(ROOT, category.name);
    for (const problem of fs.readdirSync(catPath, { withFileTypes: true })) {
      if (!problem.isDirectory()) continue;
      const notesPath = path.join(catPath, problem.name, "notes.txt");
      if (!fs.existsSync(notesPath)) continue;
      problems.push({
        category: category.name,
        name: problem.name,
        tags: parseTags(notesPath),
        relDir: `${category.name}/${problem.name}`,
      });
    }
  }

  problems.sort((a, b) =>
    a.relDir.localeCompare(b.relDir, undefined, { numeric: true })
  );

  // Group by tag.
  const byTag = {};
  for (const p of problems) {
    for (const tag of p.tags) {
      (byTag[tag] ??= []).push(p);
    }
  }

  const knownTags = Object.keys(TAG_META).filter((t) => byTag[t]?.length);
  const otherTags = Object.keys(byTag)
    .filter((t) => !(t in TAG_META))
    .sort();
  const orderedTags = [...knownTags, ...otherTags];

  // Build README.
  let out = "# NeetCode 150\n\n";
  out += `**Progress:** ${problems.length} problem${problems.length === 1 ? "" : "s"} logged\n\n`;

  out += "## By tag\n\n";
  if (orderedTags.length === 0) {
    out += "_No tags yet._\n\n";
  } else {
    for (const tag of orderedTags) {
      const emoji = TAG_META[tag] ? TAG_META[tag] + " " : "";
      out += `### ${emoji}${titleCase(tag)} (${byTag[tag].length})\n\n`;
      for (const p of byTag[tag]) {
        out += `- [${titleCase(p.name)}](${p.relDir}/) — _${titleCase(p.category)}_\n`;
      }
      out += "\n";
    }
  }

  out += "## All problems\n\n";
  out += "| Problem | Category | Tags |\n|---|---|---|\n";
  for (const p of problems) {
    const tagCell =
      p.tags
        .map((t) => `${TAG_META[t] ? TAG_META[t] + " " : ""}${t}`)
        .join(", ") || "_untagged_";
    out += `| [${titleCase(p.name)}](${p.relDir}/) | ${titleCase(p.category)} | ${tagCell} |\n`;
  }
  out += "\n";

  fs.writeFileSync(path.join(ROOT, "README.md"), out);
  const stamp = new Date().toLocaleTimeString();
  console.log(
    `[${stamp}] Wrote README.md — ${problems.length} problems, ${orderedTags.length} tags.`
  );
}

build();

if (process.argv.includes("--watch")) {
  console.log("Watching for notes.txt changes… (Ctrl+C to stop)");
  let pending = null;
  // Recursive watch works on macOS; debounce because editors fire several events per save.
  fs.watch(ROOT, { recursive: true }, (_event, filename) => {
    if (!filename || !filename.endsWith("notes.txt")) return;
    clearTimeout(pending);
    pending = setTimeout(build, 150);
  });
}
