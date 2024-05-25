import React from "react";
import { View, StyleSheet, GestureResponderEvent } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Touchable from "../Touchable";

interface ListItemActionProps {
  action?: "delete";
  onPress?(event: GestureResponderEvent): void;
}

const ListItemAction: React.FC<ListItemActionProps> = ({ action, onPress }) => {
  const bgColor = action === "delete" ? { backgroundColor: colors.danger } : {};
  const iconName = "trash-can";

  return (
    <Touchable type="none" onPress={onPress}>
      <View style={[styles.container, bgColor]}>
        <MaterialCommunityIcons name={iconName} size={35} color="white" />
      </View>
    </Touchable>
  );
};

ListItemAction.defaultProps = {
  action: "delete",
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemAction;
