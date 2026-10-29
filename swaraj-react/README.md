# Swaraj Group – React website

## Run on your computer
1. Install Node.js (https://nodejs.org) – version 18 or newer
2. Open this folder in a terminal and run:
   npm install
   npm run dev
3. Open the link it shows (usually http://localhost:5173)

## Build for hosting
   npm run build
Upload everything inside the `dist` folder to your hosting (Hostinger, Netlify, Vercel, GoDaddy...).

## Change your details
Open `src/config.js` – phone number, email and plot status (available / booked) are there.
Images are in `src/assets`. Colours and design are in `src/index.css`.

## Deploy on Netlify
Option A (easiest): drag the `dist` folder (or swaraj-netlify-dist.zip) into https://app.netlify.com/drop
Option B (GitHub): push this project to GitHub, then in Netlify choose "Import from Git".
  Build command: npm run build   |   Publish directory: dist   (already set in netlify.toml)
