/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // other content paths...
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": {
            transform: "translateX(-150%) skewX(-20deg)",
            opacity: "0",
          },
          "10%": {
            opacity: "0.3",
          },
          "100%": {
            transform: "translateX(350%) skewX(-20deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        shine: "shine 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};
