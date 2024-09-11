/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-pattern': "url('/laodicea/columns.jpg')",
      },
      colors: {
        primary: '#60CE70',
        secondary: '#24A556',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
