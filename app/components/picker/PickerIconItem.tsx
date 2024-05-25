import React from "react";
import { View, StyleSheet, GestureResponderEvent } from "react-native";
import Text from "../Text";
import Icon from "../Icon";
import { PickerItemProps } from "./PickerItem";
import Touchable from "../Touchable";

interface PickerIconItemProps {
  item: PickerItemProps & {
    icon: {
      name: string;
      bgColor: string;
    };
  };
  onPress?: (event: GestureResponderEvent) => void | undefined;
  selected: boolean;
}

const PickerIconItem: React.FC<PickerIconItemProps> = ({
  item,
  onPress,
  selected = false,
}) => {
  return (
    <View style={styles.container}>
      <Touchable onPress={onPress}>
        <View style={styles.content}>
          <Icon name={item.icon.name} bgColor={item.icon.bgColor} size={60} />
          <Text style={styles.text}>{item.label}</Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 5,
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: "33%",
  },
  content: {
    alignItems: "center",
  },
});

export default PickerIconItem;
