/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        fr: {
          bg: '#0a0a0b',
          elevated: '#131316',
          card: '#18181c',
          border: '#27272a',
          'border-hover': '#3f3f46',
          text: '#fafafa',
          secondary: '#a1a1aa',
          muted: '#71717a',
          accent: '#22d3ee',
          'accent-dim': '#0891b2',
          success: '#34d399',
          warning: '#fbbf24',
          error: '#f87171',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
