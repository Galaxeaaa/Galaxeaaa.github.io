import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
// module.exports = {
// 	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
// 	darkMode: "class", // or 'media' or 'class'
// 	theme: {
// 		extend: {
// 			transitionDuration: {
// 				0: "0ms",
// 				2000: "2000ms",
// 				4000: "4000ms",
// 			},
// 		}
// 	},
// 	variants: {
// 		extend: {},
// 		display: ["responsive", "group-hover", "group-focus"],
// 	},

// 	plugins: [
// 		// require('@tailwindcss/aspect-ratio')
// 	],
// };
