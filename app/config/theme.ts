import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  textPlaceholder: {
    color: colors.muted,
  },
  text: {
    color: colors.dark,
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
};
