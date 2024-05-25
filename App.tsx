import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import TabsNavigator from "./app/navigation/TabsNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/contexts/auth";
import authStorage from "./app/utils/authStorage";
import { AppLoading } from "expo";
import { User } from "./app/models/user";
import rootNavigation from "./app/navigation/rootNavigation";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer
        ref={rootNavigation.navigationRef}
        theme={navigationTheme}
      >
        {user ? <TabsNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

/*

Strategies when the app goes offline

- Notify the user
- Disable some features that require an internet connection
- Cache Data
  - AsyncStorage
  - SecureStore (only use for senstive data)
  - SQLite

  - Caching image using react-native-expo-image-cache
- Store user actions

*/
