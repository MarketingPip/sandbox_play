import fs from 'fs';
import path from 'path';

const changelogPath = path.resolve('./CHANGELOG.md');

// Base changelog template
const baseChangelog = `# Changelog

All notable changes to this project will be documented in this file.

<!--
These Markdown anchors provide a link to the diff for each release.
-->

`;

let rawChangelog;

// Check if changelog exists, if not create it
if (fs.existsSync(changelogPath)) {
  rawChangelog = fs.readFileSync(changelogPath, 'utf-8');
} else {
  rawChangelog = baseChangelog;
  fs.writeFileSync(changelogPath, rawChangelog, 'utf-8');
}

function appendAnchor(version) {
  const anchorLine = `[${version}]: /v${version}`;
  if (!rawChangelog.endsWith("\n")) rawChangelog += "\n";
  rawChangelog += anchorLine + "\n";
}

function addRelease({ version, date, notes }) {
  const newEntry = `\n## [${version}] - (${date})\n\n${notes}\n`;

  // Insert new version right after description (before first version)
  rawChangelog = rawChangelog.replace(
    /(All notable changes[^\n]*\n)/,
    `$1${newEntry}`
  );

  // Add/update anchor link at bottom
  appendAnchor(version);

  // Save updated changelog
  fs.writeFileSync(changelogPath, rawChangelog, 'utf-8');
}

// --- CLI Arguments ---
const args = process.argv.slice(2);

if (args.length < 1) {
  console.error('Usage: node updateChangelog.js <version> [notes]');
  process.exit(1);
}

const version = args[0];

const removedSection = args[2] && args[2].trim() !== '' 
  ? `### Removed\n${args[2]}` 
  : '';

const NOTES_TEMPLATE = `### Added
${args[1]}
  
${removedSection}
`
  
function formatDate(date = new Date()) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}


addRelease({ version, date:formatDate(), notes:NOTES_TEMPLATE });

console.log(`✅ Added release ${version} to CHANGELOG.md`);
