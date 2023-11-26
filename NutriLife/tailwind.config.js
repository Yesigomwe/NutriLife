/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '780': "780px",
        '58':'58px',
        '20':'20px',
        '40':'40px'
      },
      width: {
        '645': "645px",
        '1290': "1290px",
        '515': "515px",
        '20':'20px',
        '300':'300px'
      },
      borderRadius: {
        5: "5px",
        20: "20px",
      },
      colors: {
        'app-green': "#2A5F3B",
      },
    },
  },
  plugins: [],
};
