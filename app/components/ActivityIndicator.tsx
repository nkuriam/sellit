import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

interface ActivityIndicatorProps {
  visible: boolean;
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  visible = false,
}) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        style={styles.container}
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
};

ActivityIndicator.defaultProps = {};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  container: {
    width: 100,
    height: 100,
  },
});

export default ActivityIndicator;
