# Ex-3 — Karunya Institute Demo Page

This experiment (Ex-3) is a simple static HTML page demonstrating a small informational site for an educational institute. The page shows how to structure content (hero image, about text, gallery, testimonials) and references image assets and a stylesheet.

## Structure

- `index.html` — main HTML file that contains the page content and references `styles.css` and several image assets.
- `styles.css` — stylesheet for layout and styling (expected to be in the same folder).
- Image assets — several PNG/JPG files referenced in `index.html` (e.g. `karunya-hero.jpg`, `pic (1).png`, `testimonial (1).png`, etc.).

## Files included (high-level)

- `index.html` — Title, hero image, About Us section, gallery with three items (CSE, Library, BioTech), and two testimonial sections describing Academics and Campus Life.
- `styles.css` — (not shown here) responsible for spacing, typography and responsive layout.
- Image files referenced by the page (ensure they exist and that filenames match exactly, including spaces and casing).

## Purpose

This example demonstrates:

- Basic static site structure using semantic sections (`<section>`, headings, paragraphs).
- Using images in a gallery and hero banner.
- Organizing content into readable blocks (about, gallery, testimonials).
- How to reference a local stylesheet and local assets.

It's a good starter template for learning HTML/CSS and practicing responsive layout and accessibility improvements.

## Explanation of the code (`index.html`)

Key blocks and behavior:

- Document head — sets `charset` and a `viewport` meta tag for responsive rendering and links `styles.css`.
  - Note: the viewport meta in the provided HTML contains `content="width=\, initial-scale=1.0"` which looks like a stray backslash and comma — it should be `content="width=device-width, initial-scale=1.0"`. Fixing this will improve mobile rendering.
- Page title and hero — `h1` heading and a full-width hero image (`<img src="./karunya-hero.jpg" width="100%">`).
- `.about-us` — an About Us section with a long paragraph describing the institute.
- `.gallery` — three tiles each containing a small heading and image (CSE, Library, BioTech).
  - Filenames shown include spaces and parentheses (e.g. `pic (1).png`) — be careful with these on case-sensitive filesystems and when linking from other tools.
- `.testimonial` sections — two testimonial-style sections; one with the image on the left and content on the right, and a second reversed. They demonstrate simple media/content combinations and can be styled with CSS (flexbox/grid) for layout.

## Requirements

- Any modern web browser (Chrome, Firefox, Safari, Edge) to open `index.html`.
- No build tools required.
- A simple local HTTP server is recommended when testing relative asset loading or when the browser enforces stricter `file://` rules.

## How to view / run

Open `index.html` directly in a browser by double-clicking it or run a simple HTTP server from the `Ex-3` directory:

## Notes and suggestions

- Fix the viewport meta (replace `width=\,` with `width=device-width,`).
- Prefer filenames without spaces or parentheses for easier tooling and fewer URL-encoding issues (e.g., `pic-1.png` instead of `pic (1).png`). If you keep spaces, ensure your server or links URL-encode them correctly.
- Add meaningful `alt` text for all images for accessibility.
- Use responsive CSS (flexbox or grid) in `styles.css` so gallery and testimonial sections adapt to narrow screens.
- Optimize images (compress and scale) to reduce load time.
- Consider adding internal anchor links (IDs) so navigation can jump to sections.

## Suggested improvements / extensions

- Add a `header` and `footer` with navigation and contact/info links.
- Implement responsive layout in `styles.css` (example: use CSS grid for the gallery and flexbox for testimonials).
- Add an off-canvas mobile nav or a top navigation bar.
- Replace placeholder text with real content and add more semantic markup (e.g., `<figure>`/`<figcaption>` for gallery items).

## Contributing / Extending

- To personalize: rename image assets to simpler names, add `alt` text, and edit the about/testimonial text.
- To improve accessibility: add landmark elements (`<main>`, `<nav>`) and ARIA where needed.
- To publish: host the folder as a static site (GitHub Pages, Netlify, Vercel) after ensuring asset paths are correct.

## License

This is an educational example. No license is included by default — add one if you want to set explicit reuse terms.
