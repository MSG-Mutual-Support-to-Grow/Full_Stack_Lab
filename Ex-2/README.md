# Ex-2 — Working with HTML5 Form and Media Elements

This experiment (Ex-2) demonstrates a simple HTML page (`Application.html` / `index.html`) that showcases various media elements and embedded content commonly used in web pages: audio, images, PDF/embed, YouTube iframe, Google Maps iframe, and video. The page is intentionally minimal and intended for learning how media tags and iframes behave in a basic static site.

## Structure

- `index.html` (or `Application.html`) — main HTML file that includes media examples and navigation links.
- `Styles.css` — stylesheet referenced by the HTML for styling (note the filename casing: `Styles.css`).
- Media and asset files referenced in the HTML (examples below):
  - `test-audio.mp3` — audio file used with the `<audio>` tag.
  - `main-img.jpg` — large image displayed on the page.
  - `2019-regulations-11-03-20.pdf` — a PDF embedded with `<embed>`.
  - `sample-vid.mp4` — local video used with the `<video>` tag.

## Files included (high-level)

The example HTML uses these tags and resources:

- `<audio src="..." controls>` — plays local audio, shows browser audio controls.
- `<img src="...">` — displays a static image (width set to 90% in the example).
- `<embed src="...">` — attempts to embed a PDF file in the page.
- `<iframe>` (YouTube) — embeds a YouTube video via the video ID and query params (start time, etc.).
- `<video src="..." controls>` — plays a local video file with browser controls.
- `<iframe>` (Google Maps) — embeds a Google Maps location using the provided `src` URL.
- Navigation links linking to `Media Elements` and `Application Form` pages.

## Purpose

This experiment shows how to:

- Include and control audio and video using native HTML elements.
- Embed external content (YouTube, Google Maps) using iframes and configure common iframe attributes.
- Embed a PDF and include large images within a page.
- Combine media and embedded content on a single, responsive page for demos or documentation.

It’s useful as an instructional page when learning about HTML5 media features and how browsers handle different embedded content types.

## Requirements

- Any modern web browser (Chrome, Firefox, Safari, Edge) that supports HTML5 audio/video and iframes.
- No server is strictly required — the page can be opened directly from the filesystem, but some browsers restrict local iframe/embed/PDF behavior when opened from file://; using a simple local server is recommended.

## How to view / run

Open the page directly in your browser by double-clicking `index.html` or `Application.html`. If you run into issues loading PDFs, media or iframes from local files, serve the folder with a simple HTTP server:

If you want to test the YouTube or Maps iframes, ensure you have an active internet connection.

## Notes and best practices

- Casing: the HTML references `Styles.css` — ensure the filename matches exactly on case-sensitive filesystems.
- Accessibility: always provide meaningful `alt` attributes for images and consider captions for audio/video.
- Performance: large images and videos should be optimized (compressed and sized appropriately) to reduce page load time.
- Security: avoid embedding untrusted pages in iframes without sandboxing. Consider `sandbox` and `referrerpolicy` attributes if embedding third-party content.
- PDF embedding: browser support for `<embed>` varies — if you need broad compatibility, provide a fallback link to the PDF file.

## Suggested improvements / extensions

- Add captions or `<track>` for video subtitles.
- Provide fallback content for `<embed>` (a download link) and for iframes (a text link) when embedding fails.
- Add responsive layout rules in `Styles.css` to ensure the media scale gracefully on small screens (use CSS `max-width: 100%` on images/videos).
- Add lazy-loading for iframes (use `loading="lazy"`) to improve performance.

## Contributing / Extending

- To adapt this example, replace the sample media files with your own assets and update paths in the HTML.
- Add more media controls or UI using JavaScript (play/pause buttons, progress indicators).
- Add server-side hosting or integrate into a static-site generator for a larger demo.

## License

This is an educational example. No license file is included by default — add one if you want to set explicit reuse terms.

---