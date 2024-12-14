import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem', // 160px
        '11xl': '12rem', // 192px
        // Add more custom sizes as needed
      },
      colors: {
        orange: {
          500: '#FFA500', // Adjust as per design
          600: '#FF8C00',
        },
        pruple: {
          500: '#9837E2',
        },
        gray: {
          500: '#8E8E8E',
          900: '#101010',
          100: '#101010',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        heading: ["Montserrat", "sans-serif"],
        custom: ["DM Serif Text", 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
