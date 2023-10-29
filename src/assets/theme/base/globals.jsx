import colors from "./colors";

const { info, dark } = colors;

const globals = {
  html: {
    scrollBehavior: "smooth",
    /* font-size: 75%; */
    fontSize: "87.5%"
  },
  "@media (min-width: 991px)": {
    html: {
      fontSize: "93.75%"
    }
  },
  "@media (min-width: 1200px)": {
    html: {
      fontSize: "100%"
    }
  },

  "*, *::before, *::after": {
    margin: 0,
    padding: 0
  },
  iframe: {
    // position: "fixed !important",
    // height: "auto !important",
    zIndex: "-999 !important"
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important"
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${dark.main} !important`,
    transition: "color 150ms ease-in !important"
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`
  }
};

export default globals;
