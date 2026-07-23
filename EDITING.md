# Editing your website copy

A quick reference for changing the words on your site yourself. You don't need to
know how to code — the copy is just plain text sitting inside the page files.

---

## One-time setup

1. **Download VS Code** (free): https://code.visualstudio.com
   It color-codes the files so the words you can edit look different from the
   code you shouldn't touch. That's the whole trick.
2. **Don't use TextEdit** — it turns straight quotes into curly ones and can save
   in a format that breaks the page.
3. Drag the **dani-website** folder onto the VS Code icon. All your files show up
   in a sidebar on the left.

---

## Which file is which page

| Page on the site | File to open      |
| ---------------- | ----------------- |
| Home             | `index.html`      |
| How I work       | `how-i-work.html` |
| Results          | `results.html`    |
| About            | `about.html`      |
| Contact          | `contact.html`    |

---

## How to change a line

1. Open the file.
2. Press **⌘F** and search for the sentence you want to change.
3. Edit **only the words between the `>` and the `</...>`**. Example:

   ```html
   <p class="case-detail__body">Product complexity was increasing cost-to-serve.</p>
            ↑ leave this alone ↑                                     ↑ and this ↑
   ```

   You retype the middle: `Product complexity was increasing cost-to-serve.`
4. Press **⌘S** to save.

### The one rule

**Never change anything inside the angle brackets `< >`.** Those are the invisible
scaffolding that makes the page look right. As long as you only retype the
human-readable words between the brackets, you can't break the layout.

---

## Seeing your change

**Easiest:** double-click the `.html` file in Finder — it opens in your browser
showing your edit. Change something, save (**⌘S**), switch to the browser, and
refresh (**⌘R**).

---

## Good to know

- **Big stat numbers** (like `67%`, `90% deflection`) are just text too — same
  rule, edit the words.
- **Special characters** — the em dash `—`, the arrow `→`, and the `×` in `3×`:
  if you need one, copy it from an existing line rather than typing a plain
  hyphen. Most edits won't touch these.
- **You can't permanently break it.** **⌘Z** undoes anything, and every file is
  just text. Worst case, tell Claude "I messed up results.html" and it'll fix it.
- **The PDFs don't auto-update.** After a batch of copy edits, ask Claude to
  regenerate the copy/design PDFs.
