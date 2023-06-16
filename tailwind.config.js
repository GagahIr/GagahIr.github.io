/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        alata: ['Alata', 'sans-serif'],
        sarabun: ['Sarabun', 'sans-serif']
      },
      colors: {
        utama: "#00FFCA",
        kedua: "#46C2CB",
        white: "#ffff",
      },
      boxShadow: {
        luardalam: "0 0 6px 0.2px rgb(0 0 0 / 0.3)"
      }

    },


  },
}


