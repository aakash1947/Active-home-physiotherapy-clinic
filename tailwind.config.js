/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d9f0ff",
          200: "#bae5ff",
          300: "#8ad1fb",
          400: "#52b4ef",
          500: "#2696d7",
          600: "#1577b4",
          700: "#125f91",
          800: "#144f76",
          900: "#163f5d",
        },
        mint: {
          50: "#effff9",
          100: "#d7fff0",
          200: "#b4fce2",
          300: "#81f2cf",
          400: "#48dfb2",
          500: "#22bf94",
          600: "#169a79",
        },
        slateink: "#12324b",
      },
      boxShadow: {
        lift: "0 25px 80px -32px rgba(18, 50, 75, 0.35)",
        float: "0 18px 50px -24px rgba(20, 79, 118, 0.35)",
      },
      backgroundImage: {
        "medical-grid":
          "linear-gradient(to right, rgba(19, 95, 145, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(19, 95, 145, 0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
