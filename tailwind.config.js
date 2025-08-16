/**
 * Tailwind CSS Configuration for Camille Santiago's portfolio
 * - Dark mode via class strategy
 * - Custom accent color
 */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,md}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#fff1f4',
          100: '#ffe4ea',
          200: '#ffc8d4',
          300: '#ff9fb6',
          400: '#ff6b93',
          500: '#f5578a',
          600: '#df3e77',
          700: '#ba2a62',
          800: '#972553',
          900: '#7d2248',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px rgba(0,0,0,0.08)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 500ms ease-out',
        pulseSoft: 'pulseSoft 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};


