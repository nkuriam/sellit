import React from "react";
import { Image } from "react-native-expo-image-cache";

interface CachedImageProps {
  preview: string;
  uri: string;
  style?: object;
}

const CachedImage: React.FC<CachedImageProps> = ({
  uri,
  preview,
  ...restProps
}) => {
  return (
    <Image uri={uri} preview={{ uri: preview }} tint="light" {...restProps} />
  );
};

export default CachedImage;
