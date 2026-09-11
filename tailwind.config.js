/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        hover: 'var(--color-hover)',
        warning: 'var(--color-warning)',
        dark: 'var(--color-dark)',
        gray: 'var(--color-gray)',
      }
    }
  },
  plugins: [],
}