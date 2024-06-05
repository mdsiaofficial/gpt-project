/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      mdd: "905px",
      lg: "976px",
      xl: "1440px",
      xxl: "1920px",
    },
    extend: {
      colors: {
        bgclr: "#040C18",
        text: "#81AFDD",
        footer: "#031B34",
        subtext: "#FF8A71",
        blog: "#042c54",
        textWhite: "E7E7E7",
        gradtext: "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
        gradbar: "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
      },
      fontFamily: {
        custom: ["Inria Sans"],
        custom_2: ["Manrope"],
        
      },
    },
  },
  plugins: [],
}

