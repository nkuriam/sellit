import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";
import MyListingScreen from "../screens/MyListingScreen";

const Stack = createStackNavigator();

const MyAccountNavigator = () => (
  <Stack.Navigator initialRouteName={routes.ACCOUNT}>
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    <Stack.Screen name={routes.MY_LISTING} component={MyListingScreen} />
  </Stack.Navigator>
);

export default MyAccountNavigator;
