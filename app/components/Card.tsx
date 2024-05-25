import React from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import CachedImage from "./CachedImage";
import Text from "./Text";
import Touchable from "./Touchable";

interface CardProps {
  title: string;
  subtitle?: string;
  onPress?(event: GestureResponderEvent): void;
  image: {
    url: string;
    thumbnailUrl: string;
  };
}

const Card: React.FC<CardProps> = (props) => {
  const { title, subtitle, onPress, image } = props;

  return (
    <Touchable onPress={onPress}>
      <View style={styles.card}>
        <CachedImage
          uri={image.url}
          preview={image.thumbnailUrl}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          {subtitle && (
            <Text numberOfLines={3} style={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>
    </Touchable>
  );
};

Card.defaultProps = {};

const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontWeight: "600",
    paddingBottom: 2,
  },
  subtitle: {
    color: colors.secondary,
  },
  content: {
    padding: 15,
  },
});

export default Card;
