/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
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
        moveGradient: {
          "0%": { transform: "translate(-50%, -50%)" },
          "50%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-50%, -50%)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        shine: "shine 0.8s ease-in-out",
        moveGradient: "moveGradient 30s infinite",
        "gradient-x": "gradient-x 15s ease infinite",
      },
    },
  },
  plugins: [],
};
