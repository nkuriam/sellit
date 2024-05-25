import React from "react";
import {
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import colors, { ColorsType } from "../config/colors";

interface ButtonProps {
  title: string;
  color?: ColorsType;
  disabled?: boolean;
  onPress(event: GestureResponderEvent): void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, onPress, disabled = false, color = "primary" } = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        { backgroundColor: colors[color] },
        { opacity: disabled ? 0.5 : 1 },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    width: "100%",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Button;
