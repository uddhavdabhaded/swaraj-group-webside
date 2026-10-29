# Swaraj Group – React website

## Run on your computer
1. Install Node.js (https://nodejs.org) – version 18 or newer
2. Open this folder in a terminal and run:
   npm install
   npm run dev
3. Open the link it shows (usually http://localhost:5173)

## Build for hosting
   npm run build
The finished site is the `dist` folder. Upload that folder to Cloudflare Pages.

## Change your details
Open `src/config.js` – phone number, email and plot status (available / booked) are there.
Images are in `src/assets`. Colours and design are in `src/index.css`.

## Deploy on Cloudflare Pages
Dashboard: https://dash.cloudflare.com → Workers & Pages → Create → Pages → Upload assets.

1. In this folder run: npm run build
2. Upload the `dist` folder (the folder itself, not the files one by one).
3. Project name: swaraj-group
4. Cloudflare gives a link like https://swaraj-group.pages.dev

GitHub auto-deploy (after node_modules is removed from the repo):
- Root directory: swaraj-react
- Build command: npm run build
- Build output directory: dist
- Node.js version: 20
