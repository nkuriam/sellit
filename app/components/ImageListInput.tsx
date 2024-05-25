import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

interface ImageListInputProps {
  imagesUris: string[];
  onAddImage(uri?: string): void;
  onRemoveImage(imageUri: string): void;
}

const ImageListInput: React.FC<ImageListInputProps> = ({
  imagesUris = [],
  onAddImage = () => {},
  onRemoveImage = () => {},
}) => {
  const scrollViewRef = useRef<ScrollView>(null);

  // scroll to the end
  const handleContentSizeChanged = () => {
    if (scrollViewRef.current) scrollViewRef.current.scrollToEnd();
  };

  const imagesComponents = imagesUris.map((imageUri) => (
    <View style={styles.imageContainer} key={imageUri}>
      <ImageInput
        onSelectImage={() => onRemoveImage(imageUri)}
        imageUri={imageUri}
      />
    </View>
  ));

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollViewRef}
        onContentSizeChange={handleContentSizeChanged}
      >
        <View style={styles.container}>
          {imagesComponents}
          <ImageInput onSelectImage={onAddImage} />
        </View>
      </ScrollView>
    </View>
  );
};

ImageListInput.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imageContainer: {
    marginRight: 10,
  },
});

export default ImageListInput;
