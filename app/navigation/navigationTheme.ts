const { DefaultTheme } = require("@react-navigation/native");
const { default: theme } = require("../config/theme");

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.white,
  },
};
