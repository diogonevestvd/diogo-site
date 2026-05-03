# Step 4 / V12 — Copy and Content Polish

This pass keeps the V11 visual and animation system intact and improves the written layer.

## What changed

- Sharper home positioning: language, product, brand and digital systems are now framed as one coherent profile.
- Stronger hero lead copy, with less generic wording and a clearer interdisciplinary identity.
- More precise experience copy, especially around medical translation, Bubble B Portugal, customer service and multimedia.
- Portfolio descriptions now read more like project positioning, not just category labels.
- The contact page now has a clearer CTA and small context labels for each contact method.
- Meta descriptions were rewritten for stronger search/social snippets.
- Portuguese, English and Spanish translation strings were updated together.

## Copy direction

The tone is intentionally premium, concise and controlled:

- fewer vague claims
- more concrete verbs
- clearer relationship between translation, code and visual communication
- no inflated claims about results, clients or experience

## Future customization points

Edit `script.js` if you want to tune the multilingual text. The main sections are grouped under these keys:

- `home.*` for the hero and opening positioning
- `experience.*` for work history
- `portfolio.*` for project descriptions
- `contact.*` for CTA and contact labels

For one-language-only changes, also update the fallback HTML text in each `.html` file so the page still reads correctly before JavaScript runs.
