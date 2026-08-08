MASTRI — Prototype 2.1 (iPhone / PWA build)

IMPORTANT:
iPhone will not reliably run this game from the Files app preview.
This folder must be hosted over HTTPS to behave like a normal web app.

Easiest free hosting options:
1. Netlify Drop — drag this folder/zip onto Netlify's deploy page from a computer.
2. GitHub Pages — upload these files to a repository and enable Pages.
3. Cloudflare Pages — upload/deploy this folder.

After hosting:
- Open the HTTPS URL in Safari on iPhone.
- Tap Share.
- Tap "Add to Home Screen."
- Launch Mastri from the new Home Screen icon.
- Rotate the phone to landscape.

Included:
- index.html
- manifest.webmanifest
- sw.js
- iPhone / PWA icons

Chrome on iPhone can open the hosted URL normally. For Home Screen installation,
Safari is the most reliable route on iOS.


Prototype 2.1 bug fix:
- Enemies are now hard-contained within the playable arena.
- Launch knockback has been reduced to prevent unreachable enemies.
- A per-frame failsafe clamps enemies back inside the arena if any movement pushes them beyond the boundary.


Prototype 2.1 mobile layout update:
- Landscape-only gameplay warning in portrait orientation.
- iPhone safe-area support for Dynamic Island / sensor housing / Home indicator.
- 100dvh + visualViewport sizing for better fit when browser chrome changes size.
- Responsive HUD spacing for shorter landscape displays.
- viewport-fit=cover enabled.
- Attempts fullscreen and landscape lock when supported.
- PWA manifest now prefers landscape-primary and fullscreen/standalone display.

Prototype 2.1:
- Preserves the stable 1.3 mobile/safe-area layout.
- Mastri now has a simple armored humanoid representation instead of a dot.
- 3-hit melee combo with stronger kinetic finisher.
- Launch is contextual: kinetic strike near enemies; flight toggle away from enemies.
- Flight increases traversal speed and continuously drains energy.
- Added flight HUD state and stronger power feedback.
- Expanded street presentation with sidewalks, crosswalk and building-window detail.


Prototype 2.1 fixes:
- FLIGHT/Launch no longer damages or knocks back enemies.
- Pressing FLIGHT while airborne ALWAYS exits flight immediately, even when an enemy is nearby.
- Grounded FLIGHT enters flight mode for 8 energy.
- Flight still drains reserve continuously and automatically lands at zero energy.
- Button label changed from LAUNCH to FLIGHT to match its actual function.
- Combat damage is now restricted to the ATTACK system (Slip and Redirect remain utility powers).
