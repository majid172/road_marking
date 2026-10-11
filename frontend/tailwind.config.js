/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{vue,js,ts,jsx,tsx}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070D18',
          900: '#0B1528',
          850: '#0F1E38',
          800: '#14284B',
          700: '#1C3868',
          600: '#254E8E',
        },
        road: {
          yellow: '#FFB800',
          amber: '#F59E0B',
          glow: '#FACC15',
          dark: '#111827',
          asphalt: '#1F2937',
          lane: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(255, 184, 0, 0.12) 1px, transparent 1px)",
        'stripes': "repeating-linear-gradient(45deg, #FFB800 0, #FFB800 12px, #0B1528 12px, #0B1528 24px)"
      }
    },
  },
  plugins: [],
}
