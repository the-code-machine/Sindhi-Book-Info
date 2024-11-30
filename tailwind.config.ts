import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#458260",
        secondry: "#E76035",
        paragraphDark: "#595656",
        paragraphLight: "#E3DEDE",
        overLayHeading: "#A0DDBB",
        heading: "#000",
      },
    },
  },
  plugins: [],
} satisfies Config;
