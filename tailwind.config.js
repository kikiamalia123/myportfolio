/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    // container : {
    //   center : true,
    //   padding '16px',
    // },
    extend: {
      opacity: ['hover'],
      fontFamily : {
        'Circular' : ['Circular Std']
      },
      colors : {
        'Primary' : '#ED0D7C',
        'Dark' : '#14b8a6'
      },
      screens : {
        'laptop' : '1024px',
      }
    },
  },
  plugins: [],
}

