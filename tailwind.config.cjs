const config = {
  content: ['src/**/*.svelte'],

  theme: {
    extend: {
      fontFamily:{
        'bebas':['Bebas Neue']
      },
      boxShadow:{
        'on':'0 5px 10px'
      }
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

module.exports = config;
