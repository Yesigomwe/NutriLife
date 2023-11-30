/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '780': "780px",
        '58':'58px',
        '20':'20px',
        '28':'28px',
        '40':'40px',
        '64':'64px',
        '70':'70px',
        '90':'90px',
        '100':'100px',
        '102':'102px',
        '142':'142',
        '380':'380px',
        '426':'426px',
        '600':'600px',
        '700':'700px',
        '724':'724px',
        '344':'344px'
      },
      width: {
        '645': "645px",
        '1290': "1290px",
        '400':'400px',
        '275':'275px',
        '515': "515px",
        '20':'20px',
        '80':'80px',
        '90':'90px',
        '100':'100px',
        '192':'192px',
        '142':'142px',
        '300':'300px',
        '340':'340px',
        '378':'378px',
        '650':'650px',
        '894':'894px',
        '1400':'1400px',
        '700':'700px'
      },
      borderRadius: {
        5: "5px",
        20: "20px",
        50:'50px',
      },
      colors: {
        'green': "#2A5F3B",
        'orange':'#FE6314',
        'yellow':'#FEBB28'
      },
      fontSize: {
        '48': '48px', 
        '30':'30px',
      },
      padding:{
        '10':'10px',
      },
    },
  },
  plugins: [],
};
