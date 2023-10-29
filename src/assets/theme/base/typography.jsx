import colors from "./colors";

const typography = {
  fontSize: 16,
  lineHeight: "1.2",
  fontFamily: ["'Inter'", "sans-serif"].join(","),

  h1: {
    fontSize: "2.5rem",
    fontWeight: "700"
  },
  h2: {
    fontSize: "2.25rem",
    fontWeight: "700",
    color: colors.secondary.main
  },
  h3: {
    fontSize: "1.75rem",
    lineHeight: "1.4",
    fontWeight: "600"
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: "700"
  },
  h5: {
    fontSize: "1.125rem",
    fontWeight: "700"
  },
  h6: {
    fontSize: "1rem",
    fontWeight: "700",
    color: colors.secondary.main
  },
  subtitle1: {
    fontSize: "1.125rem",
    fontWeight: "600",
    lineHeight: "1.5"
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400
  },
  body2: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 2.2,
    margin: "0 0 2rem!important",
    "&:last-of-type": {
      marginBottom: "0.75rem!important"
    }
  }
};

export default typography;
