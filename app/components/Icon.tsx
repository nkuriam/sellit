import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  bgColor: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 40,
  color = "white",
  bgColor,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={color} />
    </View>
  );
};

export default Icon;
