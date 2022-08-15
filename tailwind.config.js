module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      backgroundImage: {
        "register-bg": "url('/public/assets/background.jpg')",
      },
      spacing: {
        mdTwo: "26rem",
      },
    },
    screens: {
      // => @media (min-width: ...) { ... }
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      minmd: { min: "968px" },
      // => @media (max-width: ...) { ... }
      maxmidmd: { max: "768px" },
      maxmd: { max: "968px" },
      maxxlmd: { max: "1280px" },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
