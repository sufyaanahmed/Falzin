# Falzin - Color Palette Guide

## 🎨 Centralized Color System

All colors for this project are centralized in `/src/lib/colors.ts` for easy theme management and consistency across the entire website.

## Color Palette

### Primary Colors (Blues)
- **#f5f5f5** - Background Light (neutral off-white)
- **#ffffff** - Pure White
- **#407ba7** - Light Blue (accents, shapes)
- **#004e89** - Medium Blue (icons, secondary elements)
- **#002962** - Dark Blue (primary text, main UI elements)
- **#00043a** - Very Dark Blue (deep accents)

### Accent Colors (Reds)
- **#ff002b** - Bright Red (primary CTA buttons, highlights)
- **#c00021** - Red Accent (hover states)
- **#a0001c** - Medium Red
- **#800016** - Dark Red

## How to Change Colors

### Method 1: Update the Color Configuration File

Edit `/src/lib/colors.ts`:

```typescript
export const colors = {
  primary: {
    50: '#f5f5f5',    // Change background color here
    100: '#ffffff',
    200: '#407ba7',
    300: '#004e89',
    400: '#002962',   // Change main text color here
    500: '#00043a',
  },
  accent: {
    100: '#ff002b',   // Change main CTA button color here
    200: '#c00021',   // Change button hover color here
    300: '#a0001c',
    400: '#800016',
  },
  // ... more settings
};
```

### Method 2: Update Color Classes

The `colorClasses` object in `/src/lib/colors.ts` provides pre-configured Tailwind classes:

```typescript
export const colorClasses = {
  bg: {
    primary: 'bg-[#f5f5f5]',        // Main background
    card: 'bg-white/60',             // Card backgrounds
    accent: 'bg-[#ff002b]',          // Button background
    accentHover: 'hover:bg-[#c00021]', // Button hover
  },
  text: {
    primary: 'text-[#002962]',       // Main text
    secondary: 'text-[#002962]/60',  // Secondary text
    accent: 'text-[#ff002b]',        // Accent text
    accentHover: 'hover:text-[#ff002b]', // Link hover
    blue: 'text-[#004e89]',          // Icon color
  },
  border: {
    primary: 'border-[#002962]/10',  // Border color
    accent: 'border-[#ff002b]',      // Accent border
  },
  gradient: {
    text: 'bg-gradient-to-r from-[#004e89] via-[#ff002b] to-[#c00021]',
    bg: 'bg-gradient-to-br from-[#407ba7]/[0.05] via-transparent to-[#ff002b]/[0.05]',
  },
};
```

## Components Using the Color System

All major components use the centralized color system:

- **Header/Navigation** (`myna-hero.tsx`)
- **Hero Section** (`shape-landing-hero.tsx`)
- **Services Section** (`services-section.tsx`)
- **Footer** (`hover-footer.tsx`)
- **Flip Links** (`flip-links.tsx`)

## Example Usage in Components

```tsx
import { colorClasses } from "@/lib/colors";

// In your component
<div className={`${colorClasses.bg.primary} ${colorClasses.text.primary}`}>
  <h1 className={colorClasses.text.accent}>Hello</h1>
  <button className={`${colorClasses.bg.accent} ${colorClasses.bg.accentHover}`}>
    Click Me
  </button>
</div>
```

## Quick Color Change Checklist

To change the entire site's color scheme:

1. ✅ Edit `/src/lib/colors.ts`
2. ✅ Update color values in the `colors` object
3. ✅ Update Tailwind classes in `colorClasses`
4. ✅ Save the file
5. ✅ The changes will apply across all components automatically!

## Tips

- **Keep contrast ratios accessible** (WCAG AA minimum 4.5:1 for normal text)
- **Test dark mode** if you plan to add it
- **Use opacity** for subtle backgrounds (e.g., `/60` for 60% opacity)
- **Preview changes** in the dev server to see real-time updates

## Need Help?

The color system is designed to be intuitive. Simply search for the color hex code you want to change in `/src/lib/colors.ts` and update it to your desired color.
