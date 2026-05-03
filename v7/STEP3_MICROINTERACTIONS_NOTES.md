# Step 3 — Microinteractions + Navigation Polish (v11)

This pass focuses on polish rather than changing the main layout.

## Added

- Scroll progress indicator.
- Mobile topbar hide/reveal on scroll.
- Stronger active navigation state on desktop and mobile.
- Improved mobile menu background, focus handling, and keyboard trap.
- Safer display typography to prevent large serif letters from being cropped.
- Contact-card hover treatment.
- Better animated link underlines/arrows.
- Fine pointer polish on contact cards and buttons.
- Focus-visible styles for keyboard accessibility.

## Letter clipping fix

The cropped-letter issue came from large Cormorant Garamond display text combined with tight line-height and split-word reveal wrappers. v11 adds padding inside the reveal wrappers and slightly relaxes headline line-height in the riskiest areas.

If you want the titles tighter again, adjust these values in `styles.css`:

- `.editorial-header h1 { line-height: ... }`
- `.hero-title { line-height: ... }`
- `.split-word { padding / margin ... }`

Do not remove the `.split-word` padding entirely unless you also remove the scroll text reveal animation.

## Customization

- Scroll progress height: `.scroll-progress { height: 3px; }`
- Mobile topbar hide threshold: `bootTopbarBehavior()` in `script.js`, currently `170px`.
- Contact-card intensity: `.contact-page .info-card` and `.contact-page .bigger-link`.
- Link arrow: `.text-link::after`.
