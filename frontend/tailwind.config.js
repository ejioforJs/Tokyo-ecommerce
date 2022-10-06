module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        "main-color": "rgb(36,38,43)",
        "menu-color": "rgb(47,49,54)",
        "main2-color": "rgb(255,54,93)",
        "menu2-color": "rgb(80,81,85)",
        "dim-text-color": "#777",
        "footer-color": "#9b9b97",
        "about-color": "rgb(230,230,230)",
        "about-color2": "rgb(200,200,200)",
        "sidebar-overlay": "rgba(0,0,0,0.5)",
        "search": "rgba(0,0,0,0.9)",
        "transparent": "rgba(0,0,0,0)"
      },
      spacing: {
        "21": "5.5rem",
        "100":"30rem",
        "102": "50rem",
      },
      fontFamily:{
        "good-font": "'Open Sans', sans-serif",
      },
      fontSize: {
        "text-xx" : "8px"
      },
      keyframes:{
        animation1 : {
          '0%': {marginBottom: "-150px",opacity:"0"},
          '100%':{marginBottom: "auto",opacity:"1"}
        }
      },
      animation:{
        'animation1' : 'animation1 2s linear'
      }
    },
  },
  plugins: [],
}