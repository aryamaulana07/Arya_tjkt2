/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container : {
      center : true,
      padding : '16 px',
    },
    extend: {
      screens :{
        '2xl' : '1320px'
      },
      colors : {
        primary : "ef4444", //warna utama
        secondary : "#9ca3af", //warna abu abu
        drak : "#020617", //warna hitam
      },
    },
  },
  plugins: [],
} 

