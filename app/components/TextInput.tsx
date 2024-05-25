import React from "react";
import { View, StyleSheet, TextInput, TextInputProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../config/theme";

export interface AppTextInputProps extends TextInputProps {
  icon?: string;
}

const AppTextInput: React.FC<AppTextInputProps> = ({ icon, ...restProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={theme.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={theme.colors.medium}
        style={[theme.text, styles.input]}
        {...restProps}
      />
    </View>
  );
};

AppTextInput.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.light,
    width: "100%",
    borderRadius: 25,
    padding: 15,
  },
  input: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
