import React, { useEffect } from "react";
import { Notifications } from "expo";
import usersApi from "../api/users";
import * as Permissions from "expo-permissions";
import { Notification } from "expo/build/Notifications/Notifications.types";

const useNotifications = (
  notificationListener?: (notification: Notification) => void
) => {
  const registerForPushNotification = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);

      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();

      usersApi.registerPushToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    registerForPushNotification();

    if (notificationListener) {
      Notifications.addListener(notificationListener);
    }
  }, []);
};

export default useNotifications;
