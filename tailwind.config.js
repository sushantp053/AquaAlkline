/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["**/*.{html,js}"],
  theme: {
  extend: {
    backgroundImage: theme => ({
     'footer-texture': "url('../img/footer1.png')",
    })
  },

    plugins:[
      require('tailwindcss-animated')
    ]
  }
}



