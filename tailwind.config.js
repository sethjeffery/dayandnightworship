/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#faf7f5",
        "background-dark": "#262524",
        input: "#ffffff",
        "input-dark": "#151413",
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
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
