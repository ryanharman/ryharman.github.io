/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(3deg)" },
        "50%": { transform: "rotate(-3deg)" },
      },
    },
    animation: {
      wiggle: "wiggle 1s ease-in-out infinite",
    },
  },
  plugins: [],
};
