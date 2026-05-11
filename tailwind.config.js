/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071B63",
        "navy-950": "#031039",
        red: "#E6002D",
        charcoal: "#111827",
        soft: "#F3F5F8",
        sand: "#C6A15B",
      },
      fontFamily: {
        heading: ["Manrope", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        institutional: "0 24px 70px rgba(3, 16, 57, 0.16)",
        "red-line": "inset 5px 0 0 #E6002D",
      },
      backgroundImage: {
        "bridge-grid":
          "linear-gradient(rgba(7,27,99,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(7,27,99,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
