/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "4k": "2000px",
      },
      colors: {
        accent: "#0ea2e9",
        accentHover: "#0287c7",
        accentLightHover: "",
        primary: "#202831",
        greyDark: "#D7DCE0",
        greyLight: "#fafafa",
        greyHover: "#F5F7F9",
      },
    },
  },
  plugins: [],
};
