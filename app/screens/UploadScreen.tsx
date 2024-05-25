import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import theme from "../config/theme";
import LottieView from "lottie-react-native";

interface UploadScreenProps {
  progress: number;
  visible: boolean;
  onDone?(isCancelled: boolean): void;
}

const UploadScreen: React.FC<UploadScreenProps> = ({
  progress,
  visible,
  onDone,
}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            width={200}
            color={theme.colors.primary}
            borderRadius={25}
          />
        ) : (
          <LottieView
            source={require("../assets/animations/done.json")}
            loop={false}
            autoPlay
            style={styles.done}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  done: {
    width: 150,
  },
});

export default UploadScreen;
