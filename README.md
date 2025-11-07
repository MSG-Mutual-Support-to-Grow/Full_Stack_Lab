# Full_Stack_Lab — Exercises 1 through 10

This repository contains a set of small front-end and simple full-stack exercises organized into folders `Ex-1` through `Ex-10`.

Each folder is a small, self-contained example intended for practice with HTML, CSS, and JavaScript. `Ex-10` includes a small Node server to demonstrate serving static files via an Express-like setup.

## Table of contents

- Ex-1 — Ex-9: static HTML/CSS/JS exercises (open `index.html` or serve with a local HTTP server)
- Ex-10: Node server + public assets (install dependencies and run)

## Quick start (how to open and run the exercises)

You can open the static exercises directly in your browser by double-clicking the `index.html` file for each exercise (for example, `Ex-1/index.html`).

If you prefer to run a local HTTP server (recommended to avoid some browser resource/security limits), use one of the following options from a terminal in the exercise folder.

Using Python 3 (cross-platform):

```powershell
# inside the exercise folder, e.g. Ex-1
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Using npx/http-server (Node, no global install required):

```powershell
# inside the exercise folder, e.g. Ex-1
npx http-server -p 8000
# then open http://localhost:8000 in your browser
```

Notes for Windows + WSL users: If you are working from WSL, run the above commands inside WSL at the project path (for example `/home/jd/projects/Full_Stack_Lab/Ex-1`) or run them from PowerShell with appropriate paths.

## Running `Ex-10` (Node example)

`Ex-10` contains `package.json` and a small server (`server.js`). To run it:

```powershell
cd Ex-10
npm install
# If package.json defines a "start" script:
npm start
# Otherwise run the server directly:
node server.js
```

If the server listens on a port (e.g. 3000 or 8000), open that port in your browser (the server will usually log the listening port).

## Short summary of folders

- `Ex-1` — Simple HTML + CSS demo (open `index.html`).
- `Ex-2` — Contains `Application.html` and `index.html` (likely demonstrates multi-page or a form-based example).
- `Ex-3` — Static HTML/CSS example.
- `Ex-4` — Static HTML/CSS example.
- `Ex-5a` / `Ex-5b` — Small JavaScript interactions (`script.js`) with associated styles.
- `Ex-6a` / `Ex-6b` — Variants of small JS exercises (compare `-a` and `-b` versions to see differences).
- `Ex-7a` — JavaScript + CSS exercise.
- `Ex-8` / `Ex-9` — `app.js` front-end examples; open `index.html` to view them.
- `Ex-10` — Small Node server with a `public` folder containing static assets (`public/style.css`). Run with `npm start` or `node server.js`.

## Tips and troubleshooting

- If a page looks unstyled, confirm you opened `index.html` from the same folder where the CSS file resides. Serving via HTTP avoids some issues with relative file paths.
- If `npm install` fails for `Ex-10`, check your Node.js version (`node -v`) and make sure you have internet access to fetch packages.
- If a script doesn't run, open the browser console (F12) to see errors and the terminal where a server is running for server-side logs.

## Contributing

These exercises are intentionally small and educational. If you want to add notes, tests, or improve an example, please add a short README inside the related `Ex-*` folder describing changes.

## License

This collection is provided for learning purposes. Add your preferred license if you plan to share or publish.

---

If you'd like, I can also:

- generate a short README for each `Ex-*` folder (auto-detecting content), or
- add a tiny script to start a simple HTTP server from the repo root that can serve any `Ex-*` folder on demand.

Tell me which of those (if any) you'd like next.
