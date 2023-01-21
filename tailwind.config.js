/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F4EDE6",
        primary: "#EB7A00",
        secondary: "#006AEB",
      },
      fontFamily: {
        serif: "var(--font-caladea)",
        handwriting: "var(--font-caveat)",
      },
    },
  },
  plugins: [],
};
