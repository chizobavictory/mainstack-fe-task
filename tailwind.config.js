/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        degularregular: ["degularregular", "sans-serif"],
        degularbold: ["degularbold", "sans-serif"],
        degularmedium: ["degularmedium", "sans-serif"],
        degularlight: ["degularlight", "sans-serif"],
        degularsemibold: ["degularsemibold", "sans-serif"],
        degularthin: ["degularthin", "sans-serif"],
        
      },
    },
  },
  plugins: [],
};
