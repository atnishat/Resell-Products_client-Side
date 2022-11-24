/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // daisyui:{
  //   themes:[
  //     {
  //       furnituretheme:{
  //         primary:'#FBBD23',
  //       }
  //     }
  //   ]
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
