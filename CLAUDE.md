# Portfolio — Project Guidelines

## Folder structure

```
src/
  cmps/        # shared components (use "cmps", not "components")
  pages/       # page sections (use "pages", not "sections")
  data/        # static content and data files
  assets/      # images and other static assets
  styles/      # all styles live here (see below)
  App.jsx
  App.scss
  main.jsx
```

## Styles architecture

```
styles/
  setup/
    _variables.scss    # CSS custom properties (:root { --... })
  base/
    _reset.scss        # global CSS reset
    _typography.scss   # font and text rules
  layout/
    _layout.scss       # page structure and containers
  cmps/                # one partial per component
  main.scss            # @use imports — entry point
```

`main.jsx` imports `styles/main.scss`. That file imports everything in order: setup → base → layout → cmps.

## CSS variables

Always use CSS custom properties — never SCSS variables.

```scss
// correct
:root {
  --color-primary: #3b82f6;
}

.btn {
  color: var(--color-primary);
}

// wrong
$color-primary: #3b82f6;
```

## Units

- Use **rem** for font sizes, spacing, layout, and border-radius
- Use **px** only for borders (`1px solid`) and very small fixed details
- Base: 16px = 1rem. Prefer clean steps: `0.25rem`, `0.5rem`, `1rem`, `1.5rem`, `2rem`, `3rem`

## General rules

- Keep code simple and readable — no clever one-liners
- Avoid adding libraries unless clearly necessary
- Design should be modern, clean, and minimal
- React with JavaScript (no TypeScript)
