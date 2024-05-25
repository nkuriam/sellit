import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";
import ColorsType from "../config/colors";

interface SafeViewProps {
  children: React.ReactNode;
  bgColor?: ColorsType;
  padding?: boolean;
}

const SafeView: React.FC<SafeViewProps> = ({
  children,
  bgColor = "white",
  padding = false,
}) => {
  const innerStyles = [
    styles.fullHeight,
    styles.container,
    { backgroundColor: bgColor },
  ];
  const paddingStyles = padding ? { padding: 20 } : {};

  return (
    <SafeAreaView style={innerStyles}>
      <View style={[styles.fullHeight, paddingStyles]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default SafeView;
