# Traction Health Design System

This document defines the design tokens and theming system from the Traction Health mobile app. Use these values to maintain visual consistency between the landing page and the app.

---

## Color Palettes

### Base Colors

| Name | Hex |
|------|-----|
| White | `#FFFFFF` |
| Black | `#000000` |

### Gray Scale

| Level | Hex | Usage |
|-------|-----|-------|
| 50 | `#F9F9FB` | Lightest backgrounds |
| 100 | `#EDEAF3` | Light backgrounds |
| 200 | `#DDD9E3` | Borders (light) |
| 300 | `#C8C5D4` | Disabled states |
| 400 | `#A09DB5` | Placeholder text |
| 500 | `#7A7690` | Muted text |
| 600 | `#5B5870` | Secondary text |
| 700 | `#403D55` | Primary text (dark bg) |
| 800 | `#29263A` | Dark backgrounds |
| 900 | `#181427` | Darkest backgrounds |

### Blue Scale (Brand)

| Level | Hex |
|-------|-----|
| 10 | `#E3F2FF` |
| 20 | `#B6DEFF` |
| 30 | `#84C4FF` |
| 40 | `#4BA7FF` |
| 50 | `#1E8BFF` |
| 60 | `#006FDE` |
| 70 | `#0055A8` |
| 80 | `#003B73` |
| 90 | `#002545` |

### Green Scale (Success/Secondary)

| Level | Hex |
|-------|-----|
| 20 | `#C7F9D5` |
| 40 | `#53D37B` |
| 60 | `#1CA24D` |
| 80 | `#0C6F33` |

### Red Scale (Error/Warning)

| Level | Hex |
|-------|-----|
| 20 | `#FFDAD6` |
| 40 | `#FF5449` |
| 60 | `#BA1A1A` |

### Metallic (Achievements)

| Name | Hex |
|------|-----|
| Gold | `#FFD700` |
| Silver | `#C0C0C0` |

---

## Theme Colors

### Light Theme

| Token | Hex | Usage |
|-------|-----|-------|
| **Text** |||
| text.primary | `#1D192B` | Main body text |
| text.secondary | `#49454F` | Secondary text |
| text.muted | `#78727E` | Muted/disabled text |
| text.light | `#E6DEC8` | Text on dark surfaces |
| **Backgrounds** |||
| background.primary | `#FFFBFE` | Page background |
| background.secondary | `#F7F2FA` | Section backgrounds |
| background.card | `#F3EDF7` | Card backgrounds |
| background.input | `#E6E0E9` | Input fields |
| **Brand** |||
| brand.primary | `#4BA7FF` | Primary actions, links |
| brand.secondary | `#53D37B` | Success, secondary actions |
| **Accent** |||
| accent.red | `#FF5449` | Errors, destructive actions |
| **Border** |||
| border.primary | `#E3DDE6` | Card borders, dividers |
| **Toggle** |||
| toggle.trackOn | `#53D37B` | Active toggle track |
| toggle.trackOff | `#E6E0E9` | Inactive toggle track |
| toggle.thumb | `#FFFFFF` | Toggle thumb |

### Dark Theme

| Token | Hex | Usage |
|-------|-----|-------|
| **Text** |||
| text.primary | `#FFFFFF` | Main body text |
| text.secondary | `#CAC4D0` | Secondary text |
| text.muted | `#9A96A5` | Muted/disabled text |
| text.alt | `#E6E0E9` | Alternative text |
| **Backgrounds** |||
| background.primary | `#141218` | Page background |
| background.secondary | `#1D1B20` | Section backgrounds |
| background.card | `#211F26` | Card backgrounds |
| background.input | `#2B2930` | Input fields |
| **Brand** |||
| brand.primary | `#9CCBFF` | Primary actions, links |
| brand.secondary | `#7AE29B` | Success, secondary actions |
| **Accent** |||
| accent.red | `#FFDAD6` | Errors (lighter for dark bg) |
| **Border** |||
| border.primary | `#49454F` | Card borders, dividers |
| **Toggle** |||
| toggle.trackOn | `#7AE29B` | Active toggle track |
| toggle.trackOff | `#49454F` | Inactive toggle track |
| toggle.thumb | `#FFFFFF` | Toggle thumb |

---

## Typography

### Font Families

| Weight | Font Family | CSS Fallback |
|--------|-------------|--------------|
| Title | `Satoshi-Medium` | `'Satoshi', sans-serif` |
| Bold (700) | `Inter-Bold` | `'Inter', sans-serif` |
| Semi-Bold (600) | `Inter-SemiBold` | `'Inter', sans-serif` |
| Medium (500) | `Inter-Medium` | `'Inter', sans-serif` |
| Regular (400) | `Inter-Regular` | `'Inter', sans-serif` |
| Light (300) | `Inter-Light` | `'Inter', sans-serif` |

### Typography Scale

| Variant | Font | Size | Line Height | Weight |
|---------|------|------|-------------|--------|
| title | Satoshi | 32px | 38px | 500 |
| h1 | Inter | 32px | 38px | 700 |
| h2 | Inter | 24px | 30px | 600 |
| h3 | Inter | 20px | 26px | 500 |
| body | Inter | 16px | 24px | 400 |
| bodySmall | Inter | 14px | 20px | 400 |
| caption | Inter | 10px | 16px | 300 |
| link | Inter | 16px | 24px | 500 |

---

## Spacing System

### Base Scale

| Token | Value |
|-------|-------|
| spacing-0 | 0px |
| spacing-1 | 4px |
| spacing-2 | 8px |
| spacing-3 | 12px |
| spacing-4 | 16px |
| spacing-5 | 20px |
| spacing-6 | 24px |
| spacing-8 | 32px |
| spacing-10 | 40px |
| spacing-12 | 48px |
| spacing-16 | 64px |
| spacing-20 | 80px |
| spacing-24 | 96px |
| spacing-32 | 128px |

### Semantic Aliases

| Alias | Value | Use Case |
|-------|-------|----------|
| xs | 4px | Tight spacing |
| sm | 8px | Small gaps |
| md | 16px | Default spacing |
| lg | 24px | Section spacing |
| xl | 32px | Large sections |
| 2xl | 40px | Major sections |
| 3xl | 48px | Hero spacing |

### Component Spacing

**Button Padding:**
- Small: `8px 12px`
- Medium: `12px 16px`
- Large: `16px 24px`

**Card Spacing:**
- Padding: `16px`
- Margin: `12px`
- Gap: `12px`

**Form Spacing:**
- Field spacing: `16px`
- Section spacing: `24px`
- Button spacing: `12px`

---

## Border Radius

| Token | Value | Use Case |
|-------|-------|----------|
| none | 0px | Sharp corners |
| sm | 4px | Subtle rounding |
| md | 8px | Default (buttons, inputs) |
| lg | 12px | Cards |
| xl | 16px | Modals |
| 2xl | 24px | Large cards |
| full | 9999px | Pills, avatars |

---

## Shadows & Elevation

| Level | Y-Offset | Blur | Opacity | Use Case |
|-------|----------|------|---------|----------|
| sm | 1px | 2px | 5% | Subtle lift (cards, navbar) |
| md | 2px | 4px | 10% | Default elevation |
| lg | 4px | 8px | 15% | Modals, FAB |
| xl | 8px | 16px | 20% | Bottom sheets |
| 2xl | 16px | 24px | 25% | Prominent overlays |

### CSS Shadow Values

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 2px 4px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 4px 8px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 8px 16px rgba(0, 0, 0, 0.2);
--shadow-2xl: 0 16px 24px rgba(0, 0, 0, 0.25);
```

---

## Glassmorphism

### Blur Intensity (Web)

| Type | Blur Value |
|------|------------|
| Background | 12px |
| Card | 8px |
| Overlay | 10px |

### Glass Backgrounds

**Light Mode:**
```css
background: rgba(255, 255, 255, 0.25);
background-elevated: rgba(255, 255, 255, 0.35);
```

**Dark Mode:**
```css
background: rgba(255, 255, 255, 0.08);
background-elevated: rgba(255, 255, 255, 0.15);
```

### Glass Border

```css
border: 1px solid rgba(255, 255, 255, 0.2); /* Light mode */
border: 1px solid rgba(255, 255, 255, 0.1); /* Dark mode */
```

---

## CSS Custom Properties

For easy implementation, use these CSS custom properties:

```css
:root {
  /* Light Theme Colors */
  --color-text-primary: #1D192B;
  --color-text-secondary: #49454F;
  --color-text-muted: #78727E;
  --color-bg-primary: #FFFBFE;
  --color-bg-secondary: #F7F2FA;
  --color-bg-card: #F3EDF7;
  --color-bg-input: #E6E0E9;
  --color-brand-primary: #4BA7FF;
  --color-brand-secondary: #53D37B;
  --color-accent-red: #FF5449;
  --color-border-primary: #E3DDE6;

  /* Typography */
  --font-title: 'Satoshi', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 40px;
  --space-3xl: 48px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 4px 8px rgba(0, 0, 0, 0.15);
}

[data-theme="dark"] {
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #CAC4D0;
  --color-text-muted: #9A96A5;
  --color-bg-primary: #141218;
  --color-bg-secondary: #1D1B20;
  --color-bg-card: #211F26;
  --color-bg-input: #2B2930;
  --color-brand-primary: #9CCBFF;
  --color-brand-secondary: #7AE29B;
  --color-accent-red: #FFDAD6;
  --color-border-primary: #49454F;
}
```

---

## Source Files

These tokens are derived from the traction-health mobile app:

- **Colors:** `traction-health/themes/tokens/colors.ts`
- **Typography:** `traction-health/themes/tokens/typography.ts`
- **Spacing:** `traction-health/themes/tokens/spacing.ts`
- **Shadows:** `traction-health/themes/tokens/shadows.ts`
- **Glassmorphism:** `traction-health/themes/tokens/glassmorphism.ts`
