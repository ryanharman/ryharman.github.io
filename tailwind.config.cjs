import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "hsl(var(--primary))",
				secondary: "hsl(var(--secondary))",
				tertiary: "hsl(var(--tertiary))",
				background: "hsl(var(--background))",
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
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
