import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../config/theme";
import Text from "./Text";
import Constants from "expo-constants";
import { NetInfoStateType, useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (
    netInfo.type === NetInfoStateType.unknown ||
    netInfo.isInternetReachable === true
  ) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text color="white">No internet connection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    height: 50,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OfflineNotice;
