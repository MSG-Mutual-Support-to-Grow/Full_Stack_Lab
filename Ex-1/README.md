# Ex-1 — Full Stack Lab: Simple Resume Page

This experiment (Ex-1) is a small, self-contained front-end example demonstrating a static resume/personal page built with plain HTML and CSS. It's intended for beginners to inspect the structure of an HTML document, how content is organized into semantic sections, and how a separate stylesheet (`styles.css`) is used to style the page.

## Structure

- `index.html` — the main HTML file containing the resume content and structure.
- `styles.css` — stylesheet that provides visual styling for the page (layout, typography, spacing, colors, etc.).
- image files referenced by the HTML may be present (e.g., `biju.jpg`, `coffe.webp`, `laptop-coffe.jpg`).

## Files included (high-level)

- `index.html` — Contains headings, a hero/contact section with name, address, phone and email, navigation links, an academic profile table, lists of technical and advanced technology skills, internship entries, and a small photo gallery.
- `styles.css` — Styles for the page. (Adjust or extend if you want different layout or colors.)

## Purpose

This exercise demonstrates:

- Basic HTML structure and semantic elements (headings, paragraphs, tables, lists, images, links).
- How to organize page content into sections for readability.
- Separating structure (HTML) from presentation (CSS).
- Using contact links (`mailto:`), external links (`target="_blank"`), and simple image usage.

It is intentionally minimal so you can open, read, and modify the HTML and CSS to learn how changes affect the rendered page.

## Explanation of the code

### `index.html`

Key sections and what they do:

- Document head — sets charset and viewport for responsive rendering and links `styles.css`.
- `h1#heading` — main page title.
- `.Hero` section — a two-column area with the person's name and contact details on the left and a profile image on the right.
  - Name and contact block: Contains a name (`h4`), address, phone number, and an email line.
  - Profile image: an `<img>` tag with an `alt` attribute for accessibility.
- `.links` — quick links area with website, college link, `mailto:` contact, and a placeholder Call link.
- Career objective — short paragraph describing the candidate's goals.
- Academic Profile — a table listing Education, School/College, Board/University, Percentage, and Year of Passing. Rows are present for B.Tech, HSC, and SSLC.
- Technical Skills — ordered list of relevant subjects/skills.
- Advanced Technology Skills — unordered list of more advanced topics (Data Science, Analytics, ML principles).
- Internship Completed — sections for different employers with placeholder text for details.
- Photo Gallery — simple image gallery using two `<img>` tags.
- Footer-like inline navigation — in-page anchor placeholders to jump to sections (currently empty `href`s).

Notes on content: the file is meant as a template. Replace placeholder text and image filenames with your own content if you use it as a real resume.

### `styles.css`

- Provides styling for typography, layout and spacing. If you want to make the layout responsive or adopt a modern layout pattern (flexbox or grid), update this file.
- If `styles.css` is missing or empty, the page will still render with browser defaults — useful for testing HTML structure first.

## Requirements

- Any modern web browser (Chrome, Firefox, Safari, Edge) to open `index.html` locally.
- No build tools required. For a simple local server (optional), you can use Python's built-in server.

## How to run / view

You can open the page directly in your browser by double-clicking `index.html` or using the File → Open dialog.

## Where to find more details

- Inspect `index.html` to see how sections are structured.
- Edit `styles.css` to change fonts, colors, layout or to practice CSS features (flexbox/grid, media queries).

## Contributing / Extending

- To personalize: replace the name, email, phone, address, images and internship descriptions with real data.
- Add anchor `id`s for the footer links so they jump to the corresponding sections.
- Replace placeholder images with appropriately sized photos and add responsive styles.
- Add simple JavaScript to enhance interactivity (e.g., a theme toggle or smooth scrolling for in-page links).

## License

This is an educational example. No license file is included by default — add one if you want to set explicit reuse terms.

---