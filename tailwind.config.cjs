const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['"Cal Sans"', ...fontFamily.sans],
      sans: ['"Outfit"', ...fontFamily.sans],
    },
  },
  plugins: [],
};
