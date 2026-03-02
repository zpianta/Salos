/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb'
        }
      },
      boxShadow: {
        shell: '0 8px 24px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
}
