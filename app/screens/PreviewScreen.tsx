import React from "react";
import SafeView from "../components/SafeView";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Preview = () => {
  return (
    <SafeView>
      <View style={styles.container}>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={35}
            color="white"
          />
        </View>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" size={35} color="white" />
        </View>
        <Image
          resizeMode="contain"
          source={require("../assets/chair.jpg")}
          style={styles.image}
        ></Image>
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  closeIcon: {
    top: 20,
    right: 20,
    position: "absolute",
  },
  deleteIcon: {
    top: 20,
    left: 20,
    position: "absolute",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default Preview;
