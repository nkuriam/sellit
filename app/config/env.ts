import Constants from "expo-constants";

const env = {
  dev: {
    apiUrl: "http://192.168.1.23:9000/api",
  },
  staging: {
    apiUrl: "https://stating.com/api",
  },
  prod: {
    apiUrl: "https://prod.com/api",
  }, 
};

const getCurrentEnv = () => { 
  if (__DEV__) return env.dev;
  if (Constants.manifest.releaseChannel === "staging") return env.staging;
  return env.prod;
};

export default getCurrentEnv();
