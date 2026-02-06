// Centralized color palette for easy theme management (Modern SaaS Style)
export const colors = {
  // Primary colors (White/Off-white base)
  primary: {
    50:  '#FFFFFF',   // Pure white
    100: '#F8FAFC',   // Off-white background
    200: '#F1F5F9',   // Light gray sections
    300: '#E2E8F0',   // Borders/subtle elements
    400: '#64748B',   // Secondary text
    500: '#1E293B',   // Primary text/headings
  },

  // Accent colors (Vibrant SaaS palette)
  accent: {
    100: '#6366F1',   // Primary brand (Indigo)
    200: '#4F46E5',   // Hover state
    300: '#818CF8',   // Light accent
    400: '#0EA5E9',   // Secondary accent (Sky blue)
    500: '#10B981',   // Success/positive (Emerald)
  },

  // Semantic colors
  background: '#ffffff',
  foreground: '#161179',

  muted: {
    DEFAULT: '#FBE4D6',
    foreground: '#161179',
  },

  card: {
    DEFAULT: '#ffffff',
    foreground: '#161179',
  },

  border: '#FBE4D6',
};

// Helper function to get color with opacity
export const withOpacity = (color: string, opacity: number) => {
  return `${color}/${opacity}`;
};

// Tailwind class helpers
export const colorClasses = {
  // Backgrounds
  bg: {
    primary: 'bg-white',
    section: 'bg-[#FBE4D6]',        // Earthy sections
    card: 'bg-white/95',
    accent: 'bg-[#261FB3]',
    accentHover: 'hover:bg-[#161179]',
    dark: 'bg-[#0C0950]',           // Nav / footer / hero
    contrast: 'bg-[#2C3930]',       // Grounding green accent
  },

  // Text colors
  text: {
    primary: 'text-[#161179]',      // Body text
    secondary: 'text-[#161179]/70',
    muted: 'text-[#161179]/50',
    heading: 'text-[#0C0950]',
    accent: 'text-[#261FB3]',
    accentHover: 'hover:text-[#161179]',
    light: 'text-white',
    contrast: 'text-[#2C3930]',     // Subtle contrast text
  },

  // Borders
  border: {
    primary: 'border-[#FBE4D6]',
    subtle: 'border-[#161179]/10',
    accent: 'border-[#261FB3]',
    contrast: 'border-[#2C3930]',
  },

  // Gradients
  gradient: {
    text: 'bg-gradient-to-r from-[#0C0950] via-[#161179] to-[#261FB3]',
    bg: 'bg-gradient-to-br from-[#FBE4D6] via-white to-[#261FB3]/10',
  },
};
