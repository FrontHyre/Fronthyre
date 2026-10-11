/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'Segoe UI',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      keyframes: {
        floatIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%': { boxShadow: '0 0 0 0 rgba(63, 191, 127, 0.5)' },
          '70%': { boxShadow: '0 0 0 10px rgba(63, 191, 127, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(63, 191, 127, 0)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '60%, 100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        floatIn: 'floatIn 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
        pulseDot: 'pulseDot 1.8s infinite',
        gradientShift: 'gradientShift 3s ease infinite',
        shine: 'shine 2.4s infinite',
      },
    },
  },
  plugins: [],
};
