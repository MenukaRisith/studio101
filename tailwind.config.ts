import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Ensures Tailwind reacts to the `dark` class
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem", // 160px
        "11xl": "12rem", // 192px
        // Additional custom font sizes can be added here
      },
      colors: {
        orange: {
          500: "#FFA500", // Adjust as per design
          600: "#FF8C00",
        },
        purple: {
          500: "#9837E2", // Corrected spelling of 'purple'
        },
        gray: {
          100: "#F5F5F5", // Added light gray
          500: "#8E8E8E",
          900: "#101010",
          1000: "#8E8E8E",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
        custom: ["DM Serif Text", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
