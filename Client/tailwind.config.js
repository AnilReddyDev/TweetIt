/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        w25:"25%",
        w30:"30%",
        w45:"45%"

      },
      borderWidth:{
        bw1:"0.8px"
      },
      colors:{
        hash:"rgb(42, 41, 41)",
        blue:"rgb(29, 155, 240)"
      },
      height:{
        h05px:"0.8px"
      },
      maxWidth:{
        w90:"90%"
      },
      minWidth:{
        w60:"60%"
      },

    },
  },
  plugins: [],
}