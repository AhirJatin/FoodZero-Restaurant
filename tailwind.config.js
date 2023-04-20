/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "20px",
      },
    },
    extend: {
      fontFamily: {
        primary: "Rufina",
        secondary: "Lato",
      },
      backgroundImage: {
        homeOurMenuBg: "url('./assets/images/homepage/Home-OurMenu-Bg.jpg')",
        homeCookLeafBg: "url('./assets/icons/Leaf.svg')",
        feedbackBg: "url('./assets/images/homepage/feedbackBg.jpg')",
        overlayBg: "url('./assets/images/homepage/overlayBg.jpg')",
        mintBg: "url('./assets/icons/Mint.svg')",
        menuBannerBg: "url('./assets/images/menupage/menuPageBannerBg.jpg')",
        blueberryBg: "url('./assets/icons/Blueberry.svg')",
        avocadoBg: "url('./assets/icons/Avocado.svg')",
        orangeBg: "url('./assets/icons/Orange.svg')",
        tomatoBg: "url('./assets/icons/Tomato.svg')",
        rosemaryBg: "url('./assets/icons/rosemary.svg')",
        contactBannerBg:
          "url('./assets/images/contactpage/contactPageBannerBg.jpg')",
        aboutBannerBg: "url('./assets/images/aboutpage/aboutPageBannerBg.jpg')",
      },
    },
  },
  plugins: [],
};
