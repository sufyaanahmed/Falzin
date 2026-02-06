// Centralized color palette for easy theme management
export const colors = {
  // Primary colors
  primary: {
    50: '#f5f5f5',    // Background light
    100: '#ffffff',   // White
    200: '#407ba7',   // Light blue
    300: '#004e89',   // Medium blue
    400: '#002962',   // Dark blue (primary text)
    500: '#00043a',   // Very dark blue
  },
  // Accent colors
  accent: {
    100: '#ff002b',   // Bright red (primary CTA)
    200: '#c00021',   // Red accent
    300: '#a0001c',   // Medium red
    400: '#800016',   // Dark red
  },
  // Semantic colors
  background: '#f5f5f5',
  foreground: '#002962',
  muted: {
    DEFAULT: '#002962',
    foreground: '#002962',
  },
  card: {
    DEFAULT: '#ffffff',
    foreground: '#002962',
  },
  border: '#002962',
};

// Helper function to get color with opacity
export const withOpacity = (color: string, opacity: number) => {
  return `${color}/${opacity}`;
};

// Tailwind class helpers (use these in your components)
export const colorClasses = {
  // Backgrounds
  bg: {
    primary: 'bg-[#f5f5f5]',
    card: 'bg-white/60',
    accent: 'bg-[#ff002b]',
    accentHover: 'hover:bg-[#c00021]',
  },
  // Text colors
  text: {
    primary: 'text-[#002962]',
    secondary: 'text-[#002962]/60',
    accent: 'text-[#ff002b]',
    accentHover: 'hover:text-[#ff002b]',
    blue: 'text-[#004e89]',
  },
  // Borders
  border: {
    primary: 'border-[#002962]/10',
    accent: 'border-[#ff002b]',
  },
  // Gradients
  gradient: {
    text: 'bg-gradient-to-r from-[#004e89] via-[#ff002b] to-[#c00021]',
    bg: 'bg-gradient-to-br from-[#407ba7]/[0.05] via-transparent to-[#ff002b]/[0.05]',
  },
};
