module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        99: "30rem",
        99.5: "37rem",
        100: "43rem",
      },
      colors: {
        dark_blue: "#140F4A",
        electric_blue: "#0D089A",
        light_blue: "#EDFCFC",
        light_grey: "#9BA3AE",
      },
      backgroundImage: (theme) => ({
        logo: "url('images/logo.svg')",
        contact: "url('images/contact_background_desktop.png')",
        calculator_background: "url('images/calculator_bg.png')",
        calculator2_background: "url('images/calculator2_bg.png')",
        calculator2a_background: "url('images/calculator2a_bg.png')",
        calculator3_background: "url('images/calculator3_bg.png')",
        calculator3a_background: "url('images/calculator3a_bg.png')",
      }),
      transitionProperty: {
        height: "max-height",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
