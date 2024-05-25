import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const ListingNavigator = () => (
  <Stack.Navigator
    initialRouteName={routes.LISTING}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={routes.LISTING} component={ListingScreen} />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
      options={{ ...TransitionPresets.ModalTransition }}
    />
  </Stack.Navigator>
);

export default ListingNavigator;
