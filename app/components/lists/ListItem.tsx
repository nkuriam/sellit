import React from "react";
import {
  View,
  StyleSheet,
  Image,
  GestureResponderEvent,
  ImageSourcePropType,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../Text";
import colors from "../../config/colors";
import Touchable from "../Touchable";

const RenderSwipeable = ({
  rightActions,
  children,
}: {
  rightActions?(): JSX.Element;
  children: JSX.Element;
}) => {
  if (rightActions) {
    return <Swipeable renderRightActions={rightActions}>{children}</Swipeable>;
  }

  return children;
};

interface ListItemProps {
  rightActions?(): JSX.Element;
  avatar?: ImageSourcePropType;
  IconComponent?: React.ReactNode;
  showChevron?: boolean;
  title: string;
  subtitle?: string;
  onPress?(event: GestureResponderEvent): void;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const {
    avatar,
    IconComponent,
    showChevron = false,
    title,
    subtitle,
    onPress,
    rightActions,
  } = props;

  return (
    <RenderSwipeable rightActions={rightActions}>
      <Touchable onPress={onPress} type="highlight">
        <View style={styles.container}>
          {IconComponent}
          {avatar && <Image style={styles.avatar} source={avatar} />}
          <View style={styles.contentContainer}>
            <Text numberOfLines={1}>{title}</Text>
            {subtitle && (
              <Text numberOfLines={2} style={styles.subtitle}>
                {subtitle}
              </Text>
            )}
          </View>
          {showChevron && (
            <MaterialCommunityIcons name="chevron-right" size={25} />
          )}
        </View>
      </Touchable>
    </RenderSwipeable>
  );
};

ListItem.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subtitle: {
    color: colors.medium,
  },
  contentContainer: {
    flexDirection: "column",
    marginLeft: 10,
    flex: 1,
  },
});

export default ListItem;
