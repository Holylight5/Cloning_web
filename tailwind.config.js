/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage:{
        'lampu': "url(/img/light-bulb_7343466.png)",
        'plan' : "url(/img/planning_854798.png)",
        'chat' : "url(/img/chat_3122613.png)",
        'bg' : "url(/img/bluesky.jpg)",
        'shop' : "url(/img/shop.jpg)"
      }
    },
  },
  plugins: [],
}

