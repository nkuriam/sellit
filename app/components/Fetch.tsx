import { ApiResponse } from "apisauce";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import useApi from "../hooks/useApi";
import ActivityIndicator from "./ActivityIndicator";
import Button from "./Button";
import Text from "./Text";

interface FetchProps {
  children(data: any): JSX.Element;
  apiRequest(): Promise<ApiResponse<any>>;
}

const Fetch: React.FC<FetchProps> = ({ children, apiRequest }) => {
  const { data, error, loading, request } = useApi(apiRequest);

  useEffect(() => {
    request();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>An error happened</Text>
        <Button onPress={request} title="retry" />
      </View>
    );
  }

  // first loading
  if (loading && !data) {
    return <ActivityIndicator visible />;
  }

  return children({ data, request, loading });
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default Fetch;
