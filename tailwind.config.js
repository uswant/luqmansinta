/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "360px",
      md: "820px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1920",
    },
    colors: {
      "primary-50": "#fff7f5ff",
      "primary-75": "#ffd9ccff",
      "primary-100": "#f5a98eff",
      "primary-300": "#16365e",
      "primary-400": "#07264d",
      "light-50": "#FEFEFE",
      "light-75": "#e9e9e9ff",
      "light-300": "#f9f9f9ff",
      "dark-50": "#eaeaeaff",
      "dark-75": "#a1a1a1ff",
      "dark-100": "#7a7a7aff",
      "dark-300": "#1a1a1aff",
      "semantic-info": "#267AB7ff",
      "semantic-success": "#12c002ff",
      "semantic-warning": "#fcb737ff",
      "semantic-danger": "#ec2e27ff",
      "linear-gradient":
        "linear-gradient(136.85deg, #FEA816 3.52%, #ED6B3C 96.61%)",
    },
    fontFamily: {
      montserrat: "var(--font-montserrat)",
    },
    fontSize: {
      "heading-regular-h6": [
        "1.25rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "heading-regular-h5": [
        "1.5rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "heading-regular-h4": [
        "2rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "heading-regular-h3": [
        "2.5rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "heading-regular-h2": [
        "3rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "heading-regular-h1": [
        "3.5rem",
        {
          letterSpacing: "0.02rem",
        },
      ],
      "heading-medium-h6": [
        "1.25rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "heading-medium-h5": [
        "1.5rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "heading-medium-h4": [
        "2rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "heading-medium-h3": [
        "2.5rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "heading-medium-h2": [
        "3rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "heading-medium-h1": [
        "3.5rem",
        {
          letterSpacing: "0.02rem",
        },
      ],
      "heading-bold-h8": [
        "0.88rem",
        {
          letterSpacing: "0rem",
          lineHeight: "1.4rem",
        },
      ],
      "heading-bold-h7": [
        "1rem",
        {
          letterSpacing: "0rem",
          lineHeight: "1.6rem",
        },
      ],
      "heading-bold-h6": [
        "1.25rem",
        {
          letterSpacing: "0rem",
          lineHeight: "2rem",
        },
      ],
      "heading-bold-h5": [
        "1.5rem",
        {
          letterSpacing: "0rem",
          lineHeight: "2.4rem",
        },
      ],
      "heading-bold-h4": [
        "2rem",
        {
          letterSpacing: "0rem",
          lineHeight: "3.2rem",
        },
      ],
      "heading-bold-h3": [
        "2.5rem",
        {
          letterSpacing: "0.01rem",
          lineHeight: "4rem",
        },
      ],
      "heading-bold-h2": [
        "3rem",
        {
          letterSpacing: "0.01rem",
          lineHeight: "4.8rem",
        },
      ],
      "heading-bold-h1": [
        "3.5rem",
        {
          letterSpacing: "0.02rem",
          lineHeight: "5.6rem",
        },
      ],
      "body-regular-xs": [
        "0.62rem",
        {
          letterSpacing: "0rem",
          lineHeight: "0.78rem",
        },
      ],
      "body-regular-s": [
        "0.75rem",
        {
          letterSpacing: "0rem",
          lineHeight: "0.97rem",
        },
      ],
      "body-regular-md": [
        "0.88rem",
        {
          letterSpacing: "0rem",
          lineHeight: "1.14rem",
        },
      ],
      "body-regular-l": [
        "1rem",
        {
          letterSpacing: "0rem",
          lineHeight: "1.4rem",
        },
      ],
      "body-regular-xl": [
        "1.12rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "body-regular-xxl": [
        "1.25rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "body-medium-xs": [
        "0.62rem",
        {
          letterSpacing: "0rem",
          lineHeight: "0.78rem",
        },
      ],
      "body-medium-s": [
        "0.75rem",
        {
          letterSpacing: "0rem",
          lineHeight: "0.97rem",
        },
      ],
      "body-medium-md": [
        "0.88rem",
        {
          letterSpacing: "0rem",
          lineHeight: "1.14rem",
        },
      ],
      "body-medium-l": [
        "1rem",
        {
          letterSpacing: "0rem",
          lineHeight: "1.4rem",
        },
      ],
      "body-medium-xl": [
        "1.12rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "body-medium-xxl": [
        "1.25rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "body-bold-md": [
        "0.88rem",
        {
          letterSpacing: "0rem",
        },
      ],
      "body-bold-l": [
        "1rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "body-bold-xl": [
        "1.12rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
      "body-bold-xxl": [
        "1.25rem",
        {
          letterSpacing: "0.01rem",
        },
      ],
    },
    boxShadow: {
      "inner-shadow-button":
        "inset 0px -2px 4px rgba(16, 16, 16, 0.2), inset 0px 2px 2px rgba(255, 255, 255, 0.25)",
    },
    extend: {},
  },
  plugins: [],
}
