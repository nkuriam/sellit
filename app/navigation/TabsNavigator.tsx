import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import theme from "../config/theme";
import AccountNavigator from "./AccountNavigator";
import ListingNavigator from "./ListingNavigator";
import NewListingButton from "./NewListingButton";
import { RootStackParamList } from "./routes";
import routes from "./routes";
import useNotifications from "../hooks/useNotifications";
import rootNavigation from "./rootNavigation";

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabsNavigator = () => {
  useNotifications((notification) => {
    const type = notification.data?.type;

    if (type === "NEW_MESSAGE" && notification.origin === "received") {
      rootNavigation.navigate(routes.ACCOUNT);
    }
  });

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
      }}
    >
      <Tab.Screen
        name={routes.LISTING}
        component={ListingNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} name="account" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
