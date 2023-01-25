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
      typography: {
        DEFAULT: {
          css: {
            fontSize: "1.125rem",
            color: "inherit",
            "--tw-prose-headings": "inherit",
            h3: {
              fontWeight: "normal",
              marginBottom: "0",
              color: "#EB7A00",
            },
            li: {
              margin: "0",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
