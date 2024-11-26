/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "nav-img": "url('/src/assets/more/15.jpg')",
        "banner-img": "url('/src/assets/more/3.png')",
        "footer-img": "url('/src/assets/more/13.jpg')",
        "footer-end-img": "url('/src/assets/more/24.jpg')",
      },
      fontFamily: {
        "rancho-font": ["Rancho", "cursive"],
        "raleway-font": ["Raleway", "sans-serif"],
      },
      backgroundColor: {
        "button-color": "#E3B577",
      },
    },
  },
  plugins: [require("daisyui")],
};
