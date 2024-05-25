import React from "react";
import { Text as TextNative, TextProps as TextPropsNative } from "react-native";
import theme from "../config/theme";
import colors, { ColorsType } from "../config/colors";

interface TextProps extends TextPropsNative {
  children: React.ReactNode;
  style?: Object;
  color?: ColorsType;
}

const Text: React.FC<TextProps> = ({
  children,
  style,
  color,
  ...restProps
}) => {
  const colorStyle = color ? { color: colors[color] } : {};

  return (
    <TextNative style={[theme.text, colorStyle, style]} {...restProps}>
      {children}
    </TextNative>
  );
};

Text.defaultProps = {
  style: {},
};

export default Text;
