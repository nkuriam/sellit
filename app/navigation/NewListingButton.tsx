import React from "react";
import { View, StyleSheet, GestureResponderEvent } from "react-native";
import theme from "../config/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Touchable from "../components/Touchable";

const NewListingButton = ({
  onPress,
}: {
  onPress(event: GestureResponderEvent): void;
}) => {
  return (
    <Touchable onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={theme.colors.white}
        />
      </View>
    </Touchable>
  );
};

NewListingButton.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: 40,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.white,
    borderWidth: 5,
    bottom: 20,
  },
});

export default NewListingButton;
