# Tagging system

Add a `Tags:` line near the top of any problem's `notes.txt`. Tags are
comma-separated. Then rebuild `README.md`:

- `npm run index` — rebuild once
- `npm run watch` — auto-rebuild whenever you save any `notes.txt`
  (leave it running in a terminal while you study)

Example `notes.txt`:

```
8/21/26
Tags: needed-help, do-again

Tried a two-pointer approach first, forgot the array wasn't sorted...
```

## Vocabulary

| Tag | Meaning |
|---|---|
| `breeze` 🟢 | Got it first try, no help |
| `needed-help` 🟡 | Had to look something up or ask |
| `do-again` 🔁 | Should re-solve from scratch later |
| `tricky` 🧠 | Non-obvious insight worth remembering |
| `revisit-later` 📌 | Come back once I've learned more |

You can invent new tags freely — they'll still show up in `README.md` under a
"By tag" section (just without an emoji). To give a new tag an emoji and a
fixed sort position, add it to `TAG_META` at the top of `generate-index.js`.
