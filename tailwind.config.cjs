/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: ["selector", "class", '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				primary: "hsl(var(--primary))",
				secondary: "hsl(var(--secondary))",
				tertiary: "hsl(var(--tertiary))",
				background: "hsl(var(--background))",
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
