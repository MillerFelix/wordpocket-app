import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const browserPath = fs.existsSync(chromePath) ? chromePath : edgePath;

// Modern metallic blue 512x512 icon with rich depth, specular sheen and brand-aligned blues (no purple)
const svgContent512 = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Base metallic blue multi-stop gradient -->
    <linearGradient id="wpMetallicBase512" x1="15%" y1="5%" x2="85%" y2="95%">
      <stop offset="0%" stop-color="#1750B2" />
      <stop offset="18%" stop-color="#1B60D4" />
      <stop offset="38%" stop-color="#2E7EFF" />
      <stop offset="52%" stop-color="#1D6DEC" />
      <stop offset="72%" stop-color="#114EB5" />
      <stop offset="90%" stop-color="#0A3686" />
      <stop offset="100%" stop-color="#06225C" />
    </linearGradient>

    <!-- Metallic reflection band / anisotropic gleam -->
    <linearGradient id="wpMetallicGleam512" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#03163E" stop-opacity="0.3" />
      <stop offset="28%" stop-color="#0D3B8E" stop-opacity="0.05" />
      <stop offset="46%" stop-color="#5EACFF" stop-opacity="0.32" />
      <stop offset="51%" stop-color="#A8D7FF" stop-opacity="0.48" />
      <stop offset="56%" stop-color="#54A5FF" stop-opacity="0.25" />
      <stop offset="75%" stop-color="#1148A6" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#041842" stop-opacity="0.35" />
    </linearGradient>

    <!-- Top-left lighting sphere for 3D curved plate feel -->
    <radialGradient id="wpLightFlare512" cx="24%" cy="18%" r="68%">
      <stop offset="0%" stop-color="#73BEFF" stop-opacity="0.45" />
      <stop offset="35%" stop-color="#1F73FF" stop-opacity="0.18" />
      <stop offset="70%" stop-color="#0F47B2" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Peripheral vignette for optical depth -->
    <radialGradient id="wpVignette512" cx="50%" cy="50%" r="72%">
      <stop offset="55%" stop-color="#000000" stop-opacity="0" />
      <stop offset="100%" stop-color="#020E28" stop-opacity="0.52" />
    </radialGradient>

    <!-- Metallic beveled edge / subtle inner rim -->
    <linearGradient id="wpMetallicRim512" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9AD0FF" stop-opacity="0.75" />
      <stop offset="30%" stop-color="#3484FF" stop-opacity="0.3" />
      <stop offset="70%" stop-color="#0D3E98" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#051C4E" stop-opacity="0.8" />
    </linearGradient>

    <!-- Elevated drop shadow for the official symbol -->
    <filter id="wpSymbolShadow512" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="15" flood-color="#020C24" flood-opacity="0.58" />
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#061B48" flood-opacity="0.35" />
    </filter>

    <!-- Subtle vertical luster on the white bubble plate -->
    <linearGradient id="wpBubblePlate512" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="65%" stop-color="#F5F9FF" />
      <stop offset="100%" stop-color="#E2EEFF" />
    </linearGradient>

    <!-- Cohesive metallic cobalt-cyan gradient for wings & dot (NO PURPLE) -->
    <linearGradient id="wpWingsGrad512" x1="8%" y1="6%" x2="92%" y2="94%">
      <stop offset="0%" stop-color="#24C6FF" />
      <stop offset="35%" stop-color="#176BFF" />
      <stop offset="75%" stop-color="#0E4EBF" />
      <stop offset="100%" stop-color="#083792" />
    </linearGradient>
  </defs>

  <!-- Full-bleed background with metallic depth and sheen (100% filled to borders) -->
  <rect width="512" height="512" fill="url(#wpMetallicBase512)" />
  <rect width="512" height="512" fill="url(#wpMetallicGleam512)" />
  <rect width="512" height="512" fill="url(#wpLightFlare512)" />
  <rect width="512" height="512" fill="url(#wpVignette512)" />
  <rect x="1.5" y="1.5" width="509" height="509" fill="none" stroke="url(#wpMetallicRim512)" stroke-width="3" />

  <!-- Centered official application symbol within the 80% Safe Zone (central 410px) -->
  <g filter="url(#wpSymbolShadow512)" transform="translate(86, 80) scale(0.664)">
    <!-- White Speech Bubble Silhouette with soft depth -->
    <path d="M144 72 H368 C424 72 456 104 456 160 V288 C456 344 424 376 368 376 H224 L144 440 C132 448 116 440 116 424 V376 C76 372 56 348 56 304 V160 C56 104 88 72 144 72 Z" fill="url(#wpBubblePlate512)" />
    <!-- Left Wing (W) -->
    <path d="M168 188 C206 172 242 184 251 202 C253 206 253 306 253 306 C242 290 206 278 168 294 C158 298 148 290 148 280 V202 C148 192 158 184 168 188 Z" fill="url(#wpWingsGrad512)" />
    <!-- Right Wing (P) -->
    <path d="M344 188 C306 172 270 184 261 202 C259 206 259 306 259 306 C270 290 306 278 344 294 C354 298 364 290 364 280 V202 C364 192 354 184 344 188 Z" fill="url(#wpWingsGrad512)" />
    <!-- Central Accent Dot -->
    <circle cx="256" cy="164" r="16" fill="url(#wpWingsGrad512)" />
  </g>
</svg>`;

// Scaled 192x192 metallic blue icon
const svgContent192 = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="192" height="192">
  <defs>
    <linearGradient id="wpMetallicBase192" x1="15%" y1="5%" x2="85%" y2="95%">
      <stop offset="0%" stop-color="#1750B2" />
      <stop offset="18%" stop-color="#1B60D4" />
      <stop offset="38%" stop-color="#2E7EFF" />
      <stop offset="52%" stop-color="#1D6DEC" />
      <stop offset="72%" stop-color="#114EB5" />
      <stop offset="90%" stop-color="#0A3686" />
      <stop offset="100%" stop-color="#06225C" />
    </linearGradient>

    <linearGradient id="wpMetallicGleam192" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#03163E" stop-opacity="0.3" />
      <stop offset="28%" stop-color="#0D3B8E" stop-opacity="0.05" />
      <stop offset="46%" stop-color="#5EACFF" stop-opacity="0.32" />
      <stop offset="51%" stop-color="#A8D7FF" stop-opacity="0.48" />
      <stop offset="56%" stop-color="#54A5FF" stop-opacity="0.25" />
      <stop offset="75%" stop-color="#1148A6" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#041842" stop-opacity="0.35" />
    </linearGradient>

    <radialGradient id="wpLightFlare192" cx="24%" cy="18%" r="68%">
      <stop offset="0%" stop-color="#73BEFF" stop-opacity="0.45" />
      <stop offset="35%" stop-color="#1F73FF" stop-opacity="0.18" />
      <stop offset="70%" stop-color="#0F47B2" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="wpVignette192" cx="50%" cy="50%" r="72%">
      <stop offset="55%" stop-color="#000000" stop-opacity="0" />
      <stop offset="100%" stop-color="#020E28" stop-opacity="0.52" />
    </radialGradient>

    <linearGradient id="wpMetallicRim192" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9AD0FF" stop-opacity="0.75" />
      <stop offset="30%" stop-color="#3484FF" stop-opacity="0.3" />
      <stop offset="70%" stop-color="#0D3E98" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#051C4E" stop-opacity="0.8" />
    </linearGradient>

    <filter id="wpSymbolShadow192" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#020C24" flood-opacity="0.58" />
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#061B48" flood-opacity="0.35" />
    </filter>

    <linearGradient id="wpBubblePlate192" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="65%" stop-color="#F5F9FF" />
      <stop offset="100%" stop-color="#E2EEFF" />
    </linearGradient>

    <linearGradient id="wpWingsGrad192" x1="8%" y1="6%" x2="92%" y2="94%">
      <stop offset="0%" stop-color="#24C6FF" />
      <stop offset="35%" stop-color="#176BFF" />
      <stop offset="75%" stop-color="#0E4EBF" />
      <stop offset="100%" stop-color="#083792" />
    </linearGradient>
  </defs>

  <rect width="192" height="192" fill="url(#wpMetallicBase192)" />
  <rect width="192" height="192" fill="url(#wpMetallicGleam192)" />
  <rect width="192" height="192" fill="url(#wpLightFlare192)" />
  <rect width="192" height="192" fill="url(#wpVignette192)" />
  <rect x="1" y="1" width="190" height="190" fill="none" stroke="url(#wpMetallicRim192)" stroke-width="1.5" />

  <g filter="url(#wpSymbolShadow192)" transform="translate(32, 30) scale(0.249)">
    <path d="M144 72 H368 C424 72 456 104 456 160 V288 C456 344 424 376 368 376 H224 L144 440 C132 448 116 440 116 424 V376 C76 372 56 348 56 304 V160 C56 104 88 72 144 72 Z" fill="url(#wpBubblePlate192)" />
    <path d="M168 188 C206 172 242 184 251 202 C253 206 253 306 253 306 C242 290 206 278 168 294 C158 298 148 290 148 280 V202 C148 192 158 184 168 188 Z" fill="url(#wpWingsGrad192)" />
    <path d="M344 188 C306 172 270 184 261 202 C259 206 259 306 259 306 C270 290 306 278 344 294 C354 298 364 290 364 280 V202 C364 192 354 184 344 188 Z" fill="url(#wpWingsGrad192)" />
    <circle cx="256" cy="164" r="16" fill="url(#wpWingsGrad192)" />
  </g>
</svg>`;

// Write updated SVGs to public
fs.writeFileSync(path.resolve('public/pwa-512x512.svg'), svgContent512);
fs.writeFileSync(path.resolve('public/pwa-192x192.svg'), svgContent192);

// Function to render HTML with SVG to PNG via headless Chrome
function renderToPng(svgString, width, height, outputPath) {
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: ${width}px; height: ${height}px; overflow: hidden; background: #082A6E; }
    svg { display: block; width: 100%; height: 100%; }
  </style>
</head>
<body>
  ${svgString}
</body>
</html>`;

  const tempHtml = path.resolve(`temp_render_${width}x${height}.html`);
  fs.writeFileSync(tempHtml, htmlContent);

  const cmd = `"${browserPath}" --headless=new --disable-gpu --no-sandbox --screenshot="${outputPath}" --window-size=${width},${height} "${tempHtml}"`;
  execSync(cmd);
  if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);

  console.log(`Rendered: ${path.basename(outputPath)} (${width}x${height})`);
}

// Generate all needed PNGs with identical metallic blue visual identity
renderToPng(svgContent512, 512, 512, path.resolve('public/pwa-512x512.png'));
renderToPng(svgContent512, 512, 512, path.resolve('public/pwa-maskable-512x512.png'));
renderToPng(svgContent192, 192, 192, path.resolve('public/pwa-192x192.png'));
renderToPng(svgContent192, 192, 192, path.resolve('public/pwa-maskable-192x192.png'));
renderToPng(svgContent512, 180, 180, path.resolve('public/apple-touch-icon.png'));
renderToPng(svgContent192, 64, 64, path.resolve('public/favicon.png'));

console.log('All metallic blue PWA icons successfully generated!');
