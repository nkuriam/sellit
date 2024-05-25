import { NavigationContainerRef } from "@react-navigation/native";
import React from "react";
import routes from "./routes";

const navigationRef = React.createRef<NavigationContainerRef>();

const navigate = (name: routes, params?: any) => {
  navigationRef.current?.navigate(name, params);
};

export default { navigate, navigationRef };
