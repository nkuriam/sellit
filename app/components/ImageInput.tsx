import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../config/theme";

interface ImageInputProps {
  onSelectImage(uri?: string): void;
  imageUri?: string;
}

const ImageInput: React.FC<ImageInputProps> = ({
  onSelectImage = () => {},
  imageUri,
}) => {
  const selectImage = async () => {
    const response = await ImagePicker.launchImageLibraryAsync({
      // select only images
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // reduce quality for large upload
      quality: 0.5,
    });

    if (!response.cancelled) {
      onSelectImage(response.uri);
    }
  };

  const requestPermission = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    return granted;
  };

  const handlePress = async () => {
    const permission = await requestPermission();

    if (!permission) {
      return alert("You need to enable a permisson to access the library");
    }

    if (imageUri) {
      return Alert.alert(
        "Delete picture",
        "Are you sure to delete this picture",
        [{ text: "No" }, { text: "Yes", onPress: () => onSelectImage() }]
      );
    }

    selectImage();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <MaterialCommunityIcons
          name="camera"
          size={30}
          color={theme.colors.medium}
        />
      )}
    </TouchableOpacity>
  );
};

ImageInput.defaultProps = {};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: theme.colors.light,
  },
});

export default ImageInput;
