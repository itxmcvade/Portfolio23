/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-headings": theme("colors.blogLight"),
            "--tw-prose-body": theme("colors.blogLight"),
            "--tw-prose-bullets": theme("colors.blogLight"),
            "--tw-prose-quotes": theme("colors.pink[900]"),
            "--tw-prose-quote-borders": theme("colors.blogLight"),
            "--tw-prose-captions": theme("colors.pink[700]"),
            "--tw-prose-code": theme("colors.blogLight"),
            "--tw-prose-pre-code": theme("colors.blogLight"),
            "--tw-prose-pre-bg": theme("colors.codeBg"),
            "--tw-prose-quotes": theme("colors.pink[900]"),
            "--tw-prose-invert-headings": theme("colors.primary"),
            "--tw-prose-invert-body": theme("colors.secondary"),
            "--tw-prose-invert-bullets": theme("colors.primary"),
            "--tw-prose-invert-quote-borders": theme("colors.primary"),
            "--tw-prose-invert-code": theme("colors.primary"),
            "--tw-prose-invert-pre-code": theme("colors.primary"),
            "--tw-prose-invert-pre-bg": theme("colors.darkCodeBg"),
            "--tw-prose-invert-counters": theme("colors.primary"),
          },
        },
      }),
      animation: {
        "rotate-and-back": "rotate-and-back 0.5s ease-in-out",
        moveRightAndBack: "moveRightAndBack 0.5s ease-in-out",
        "progress-bar": "progress-bar 0.3s ease-in-out",
      },

      keyframes: {
        "rotate-and-back": {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(25deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        moveRightAndBack: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(0.4em)" },
          "100%": { transform: "translateX(0)" },
        },
        "progress-bar": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
      },
      colors: {
        primary: "#f2f2f2",
        secondary: "#888",
        // secondary: "#7c7f82",
        darkGray: "#6e6e73",
        defaultBorder: "#eeeeee",
        customGray: "rgba(238, 238, 238, 0.5)",
        hoverBlack: "#111111",
        hoverGray: "#FAFAFA",
        purple: "#8A3DFF",
        blogLight: "#37352f",
        codeBg: "#F7F6F2",
        darkCodeBg: "#202020",
        blcklight: '#2d1fe8',

      },

      screens: {
        sm: "500px",
        // => @media (min-width: 640px) { ... }

        md: "640px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
