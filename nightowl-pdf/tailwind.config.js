/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Midnight (OLED Dark)
        midnight: {
          bg: '#000000',
          text: '#E4E4E7',
          accent: '#A855F7',
        },
        // Slate (Charcoal)
        slate: {
          bg: '#1E293B',
          text: '#F8FAFC',
          accent: '#3B82F6',
        },
        // Warm Night (Dark Sepia)
        warm: {
          bg: '#2C241B',
          text: '#D4B895',
          accent: '#F59E0B',
        }
      },
      fontFamily: {
        heading: ['Inter', 'Roboto', 'sans-serif'],
        body: ['Merriweather', 'Lora', 'serif'],
      }
    },
  },
  plugins: [],
}
