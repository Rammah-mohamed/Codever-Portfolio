import { light } from "@mui/material/styles/createPalette";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			main: "rgb(var(--main-color) / <alpha-value>)",
			second: "rgb(var(--second-color) / <alpha-value>)",
			secondLight: "rgb(var(--second-color) / 0.8)",
			light: "rgb(var(--light-color) / <alpha-value>)",
			font: "rgb(var(--font-color) / <alpha-value>)",
		},
		extend: {
			animation: {
				"bounce-slow": "bounce 5s linear infinite",
				"pulse-slow": "pulse 3s linear infinite",
				"wiggle-slow": "wiggle 3s linear infinite",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-5deg)" },
					"50%": { transform: "rotate(5deg)" },
				},
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".no-scrollbar": {
					/* For Firefox */
					"scrollbar-width": "none",
					/* For Chrome, Safari, and Edge */
					"&::-webkit-scrollbar": {
						display: "none",
					},
				},
			});
		},
	],
};
