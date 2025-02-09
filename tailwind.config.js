/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        main:{
          DEFAULT:"#FFF9F9",
          primary:"#A43232",
          accent:"#F36563"
        }
      },
      
      fontFamily: {
        pregular: ["UbuntuRegular", "sans-serif"],
        pmedium: ["UbuntuMedium", "sans-serif"],
        pbold: ["UbuntuBold", "sans-serif"],
      },
      fontSize: {
        tiny: '0.625rem', // 10px
        small: '0.875rem', // 14px
        base: '20px', // 16px (default)
        large: '30px', // 20px
        huge: '32px', // 40px
      } ,
      borderRadius:{
        xxl:'1.75rem'
      },
      textColor:{
        "regular":"#878480",
        "accent":"#FFEDF1"
      },
      backgroundColor:{
        button:'#E07973'
      },
      
       
    },
  },
  plugins: [],
}