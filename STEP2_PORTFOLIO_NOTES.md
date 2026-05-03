# Step 2 Portfolio Notes — V10

This pass upgrades the portfolio from simple information cards into a more premium project showcase.

## Main components

- `.portfolio-stage` controls the featured work layout.
- `.project-feature` is the large featured Sul card.
- `.project-showcase` controls the three project cards.
- `.project-card` is the reusable card pattern.
- `bootPortfolioShowcase()` controls the portfolio-specific visual motion.

## Easy customization

### Change featured project
Edit the `.project-feature` block inside `portfolio.html`. The large title uses:

```html
<h2 class="feature-project-title" data-i18n="portfolio.feature.title">Sul</h2>
```

### Change project cards
Each project card starts with:

```html
<article class="project-card ..." data-project-card>
```

Keep `data-project-card` if you want hover movement and scroll animation to keep working.

### Adjust visual intensity
In `script.js`, find `bootPortfolioShowcase()`. Lower these values for a calmer result:

```js
x * 18
y * 18
x * -10
y * -10
```

### Adjust spacing and size
In `styles.css`, edit the Step 2 section:

```css
.project-feature
.project-showcase
.project-card
.feature-project-title
```

## Current aesthetic setting

- Luxury editorial: 65%
- Digital kinetic: 35%
- Animation intensity target: 73/100
