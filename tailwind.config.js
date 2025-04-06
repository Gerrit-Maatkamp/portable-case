/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
      },
      animation: {
        shine: "shine 0.8s ease-in-out",
        moveGradient: "moveGradient 30s infinite",
      },
    },
  },
  plugins: [],
};
