import React from "react";
import {
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

// type : 'opacity' | 'highlight' | 'none'

const touchablesComponents = {
  opacity: TouchableOpacity,
  highlight: TouchableHighlight,
  none: TouchableWithoutFeedback,
};

interface TouchableProps {
  onPress?: (event: GestureResponderEvent) => void;
  children: JSX.Element;
  type?: "opacity" | "highlight" | "none";
}

const Touchable: React.FC<TouchableProps> = ({
  onPress,
  children,
  type = "opacity",
  ...restProps
}) => {
  if (!onPress) return <View {...restProps}>{children}</View>;

  const Component = touchablesComponents[type];

  return (
    <Component onPress={onPress} {...restProps}>
      {children}
    </Component>
  );
};

Touchable.defaultProps = {};

export default Touchable;
