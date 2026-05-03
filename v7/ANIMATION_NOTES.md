# Diogo Neves site — animation notes

## What changed

This version adds a full motion layer inspired by the two reference directions:

- Juan Mora-style smooth, premium scroll motion, split text reveals, elastic hover behavior, and softer panel movement.
- LOUD Manifesto-style stronger page transition, editorial mobile menu, high-contrast overlay behavior, and more assertive navigation rhythm.

Target intensity: approximately 73/100.

## Added animation/effect systems

- Page-load and page-to-page transition overlay.
- Scroll-triggered word reveal for titles, eyebrow labels, headings, and lead text.
- Scroll-triggered card and panel reveal.
- Smooth scrolling with Lenis.
- Desktop navigation entrance.
- Animated desktop and mobile nav typography.
- Mobile menu reveal with clipped panel animation and staggered links.
- Magnetic hover on buttons, nav links, text links, and language buttons.
- Subtle 3D panel hover movement.
- Hero image reveal and soft scroll movement.
- Ambient background shapes.
- Reduced-motion fallback for accessibility.

## Files changed

- `index.html`
- `experiencia.html`
- `portfolio.html`
- `contactos.html`
- `styles.css`
- `script.js`
- `assets/vendor/gsap.min.js`
- `assets/vendor/ScrollTrigger.min.js`
- `assets/vendor/lenis.min.js`

The same changes were mirrored inside `/v7`.

## Customization points

### Animation intensity

Most intensity can be changed in `script.js`:

- Page transition speed: search for `bootPageTransition()` and adjust `duration`, `stagger`, and delays.
- Text reveal speed: search for `prepareTextReveals()` and adjust `duration`, `stagger`, `yPercent`, and `rotate`.
- Panel hover strength: search for `bootPanelMovement()` and adjust `rotateX`, `rotateY`, and `y`.
- Magnetic hover strength: search for `bootMagneticHover()` and adjust the multipliers `0.12` and `0.20`.

### Visual styling

Main styling is at the end of `styles.css` under:

`Motion system V8: Juan Mora x LOUD-inspired refinement`

Useful variables:

- `--ease-out-expo`
- `--ease-in-out-expo`
- `--motion-shadow`

Useful components:

- `.page-transition`
- `.transition-band`
- `.ambient-field`
- `.cursor-orb`
- `.mobile-menu-panel`
- `.mobile-nav a`

### Mobile layout

Mobile overrides are mostly under:

- `@media (max-width: 900px)`
- `@media (max-width: 640px)`

The mobile menu is intentionally more editorial and larger than the previous version.

## Notes

The site remains static and can still be opened directly through `index.html`, but the best preview method is still VS Code Live Server.

---

## Step 1 / V9 polish pass

Direction: approximately 65% luxury editorial + 35% digital kinetic.

Added in this pass:

- Stronger home hero composition with a larger editorial title system.
- New hero thesis line for sharper positioning.
- Identity chips for Translation / Code / Visual Communication.
- Compact proof grid for focus, fields, and working method.
- Floating photo caption with DN signature treatment.
- Subtle oversized vertical identity mark behind the photo area.
- Indexed editorial headers on Experience, Portfolio, and Contact pages.
- Wider desktop rhythm, larger spacing, stronger visual hierarchy, and more controlled first-screen pacing.
- Additional hero-specific GSAP entrance animation.

Useful V9 customization points in `styles.css`:

- `--editorial-max`: overall desktop content width.
- `--editorial-gap`: spacing between hero copy and image.
- `--editorial-radius`: large panel radius.
- `.hero-title`: main home title scale and line-height.
- `.hero-thesis`: premium serif positioning statement.
- `.hero-proof-grid`: compact identity/proof block.
- `.photo-caption`: floating DN image label.
- `.editorial-header`: inner-page hero/header treatment.

Useful V9 customization points in `script.js`:

- `bootHeroEditorial()`: entrance timing for the hero index, signature chips, proof grid, and photo caption.

Current target quality estimate after this pass: 88–90/100, depending on live browser rendering and personal taste.
