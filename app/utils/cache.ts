import AsyncStorage from "@react-native-community/async-storage";
import dayjs from "dayjs";

const prefix = "cache";

type StoredItemType = { value: any; timestamp: Date };

const store = async (key: string, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    //TODO: USE BUGSNACK
    console.log(error);
  }
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);

    if (!value) return null;

    const item = JSON.parse(value);

    if (!isExpired(item)) return null;

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item: StoredItemType) => {
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, "minute") > 5;
};

export default { store, get };
