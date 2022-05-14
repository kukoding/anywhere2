module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(0,89%,75%)',
        darkGrayishBlue: 'hsl(196,13%,55%)',
        brightRedSupLight: 'hsl(0,58%,92%)',
        veryLightGray: 'hsl(0,0%,97%)',
        veryDarkBlue: 'hsl(233,90%,4%)',
      }
    },
  },
  plugins: [],
}
