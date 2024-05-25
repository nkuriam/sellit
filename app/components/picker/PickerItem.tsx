import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import Text from "../Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Touchable from "../Touchable";

export interface PickerItemProps {
  label: string;
  value: string | number;
}

interface Props {
  item: PickerItemProps;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  selected: boolean;
}

const PickerItem: React.FC<Props> = ({ item, onPress, selected = false }) => {
  return (
    <Touchable type="opacity" onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{item.label}</Text>
        {selected && <MaterialCommunityIcons name="check" size={20} />}
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
  },
});

export default PickerItem;
