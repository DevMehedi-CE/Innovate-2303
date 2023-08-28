/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['DM Sans'],
        'chivo': [ 'Chivo'],
      },
      fontSize:{
          56:"56px",
          46:"46px",
          44:"44px",
          22:"22px",
      },
      colors:{
        primary:"#3639A4",
        secondary:"#43E7DF",
        third:"#645E76",
        highlight:"#FDB400",
        save:"#43E7DF",
        icone:"#F4EBFF",
        iconebg:"#E8F2FA",
      },
      spacing:{
        14:"14px",
        22:"22px",
        26:"26px",
        30:"30px",
        37:"37px",
        50:"50px",
        60:"60px",
        195:"195px",
        100:"100px",
        104:"104px",
        116:"116px",
        140:"140px",
        160:"160px",
        195:"195px",
        200:"200px",
        291:"291px",
        552:"552px",


      },
      maxWidth:{
        container:"1410px",
        220:"220px",
        300:"300px",
        330:"330px",
        350:"350px",
        450:"450px",
        467:"467px",
        504:"504px",
        530:"480px",
        553:"553px",
        600:"600px",
        753:"753px",
        796:"796px",

        
      },
      minWidth:{
        300:"300px",
        480:"480px",
      }
    },
  },
  plugins: [],
}