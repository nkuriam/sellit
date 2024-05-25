import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";

const ListItemSeparator = ({ height = 1 }: { height: number }) => {
  return <View style={[styles.separator, { height: height }]} />;
};

const styles = StyleSheet.create({
  separator: { width: "100%", backgroundColor: colors.light },
});

export default ListItemSeparator;
