/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "spirit-green": "#2D5A27",
        "holy-gold": "#C5A059",
        "stone-beige": "#F9F7F2",
        "deep-charcoal": "#2A2A2A",
      },
    },
  },
  plugins: [],
}



