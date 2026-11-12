# Rithish Reddy Pooli — Portfolio

A one-page personal portfolio. Everything is static HTML, CSS and JavaScript — no build
step, no framework, no database.

**Live at:** https://site-6a1189d6553349f1b7a429a6ecb35832.freebuff.page

## What each file is

| File | What it's for |
| --- | --- |
| `index.html` | The whole website. Text, styles and the small bit of JavaScript all live in this one file. |
| `portrait.jpg` | Your photo, used in the hero circle. 640×640. |
| `favicon.png` | The little icon in the browser tab, cropped from your photo. |
| `apple-touch-icon.png` | The icon iPhone/iPad uses when the page is saved to the home screen. |
| `og-image.jpg` | The 1200×630 picture shown in link previews on LinkedIn, WhatsApp, Slack and X. |
| `dist/` | The copy that actually gets uploaded. `dist/public/` holds the site files, `dist/worker.js` and `dist/manifest.json` tell the host what to serve. You never need to edit these by hand. |

The screenshots you gave me are one folder up, in `portfolio-source-assets/`. They contain
your phone number and email, so they stay out of this folder and are never uploaded.

## Editing the content

Open `index.html` in any text editor and change the words between the tags. The page is split
into sections, each marked with a comment:

```html
<!-- ═══ About ═══ -->
<!-- ═══ Projects ═══ -->
```

- **Text** — edit it directly. Headings use `<h2>`, paragraphs `<p>`, project cards `<a class="card">`.
- **Adding or removing a project** — copy one whole `<a class="card">…</a>` block inside the
  `<div class="work-grid">` and edit its title, description and tags. Update the `card-idx`
  number and the `href` link.
- **Photo** — replace `portrait.jpg` with a new square image of the same name. Keep it near
  640×640 so the page stays fast.
- **Contact details** — your email appears in the "Email" fact and the contact panel;
  LinkedIn and GitHub links appear in several places. Search for the old text and replace all
  hits, or the page will show a mix of old and new.
- **Link preview tags** — at the top of `<head>` are the `og:` and `twitter:` tags that build
  the share card. If you move to a custom domain later, update `og:url`, `og:image` and
  `twitter:image` to the new address. All three need the full `https://…` URL.

### Checking it locally

Don't open `index.html` by double-clicking — your photo won't load that way. Start a tiny
server instead, from this folder:

```bash
python -m http.server 8141
```

Then visit http://127.0.0.1:8141 in your browser. Press Ctrl+C when you're done.

## Redeploying after a change

1. Edit `index.html` (or swap `portrait.jpg`) in this folder.
2. Copy the five site files into the upload folder, replacing the old ones:

   ```bash
   cp index.html portrait.jpg favicon.png apple-touch-icon.png og-image.jpg dist/public/
   ```

3. Publish. Either ask me to redeploy, or use the Publish button in the Freebuff Sites panel.
   This README is deliberately not copied across, so it never ends up on the live site.

After the new version is up, link previews may still show the old card for a while because
LinkedIn and WhatsApp cache them. Paste the URL into
[LinkedIn's Post Inspector](https://www.linkedin.com/post-inspector/) to force a refresh, and
add `?v=2` to the end of the URL when sharing on WhatsApp to bust its cache.

## Known trade-offs

- The phone number is stored only inside the WhatsApp link (`wa.me/919441662244`), but it is
  still visible as the link's label in the "Get in touch" menu — remove that line if you'd
  rather not show it publicly.
- If someone opens the page with JavaScript turned off, the `<noscript>` rule in `<head>`
  keeps every section visible; the "Get in touch" menu simply won't open.
