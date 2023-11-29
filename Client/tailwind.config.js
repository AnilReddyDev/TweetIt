/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '578px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1020px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1636px',
      // => @media (min-width: 1536px) { ... }
    },
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
        blue:"rgb(29, 155, 240)",
        lightblue:"rgb(29, 155, 240,70%)",
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