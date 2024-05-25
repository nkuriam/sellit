import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import listingsApi from "../api/listings";
import Card from "../components/Card";
import Fetch from "../components/Fetch";
import SafeView from "../components/SafeView";
import colors from "../config/colors";
import { Listing, ListingEditType } from "../models/listing";
import routes, { RootStackParamList } from "../navigation/routes";

interface ListingScreenProps {
  navigation: StackNavigationProp<RootStackParamList, routes.LISTING>;
}

const ListingScreen: React.FC<ListingScreenProps> = ({ navigation }) => {
  const handlePress = (item: Listing) => {
    navigation.navigate(routes.LISTING_DETAILS, item);
  };

  return (
    <Fetch apiRequest={listingsApi.getListings}>
      {({ data, request, loading }) => (
        <SafeView bgColor={colors.light}>
          <FlatList
            data={data}
            refreshing={loading}
            onRefresh={request}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.container}>
                <Card
                  title={item.title}
                  subtitle={`$${item.price}`}
                  image={item.images[0]}
                  onPress={() => handlePress(item)}
                />
              </View>
            )}
          />
        </SafeView>
      )}
    </Fetch>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
});

export default ListingScreen;
