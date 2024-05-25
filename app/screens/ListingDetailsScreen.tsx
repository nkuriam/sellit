import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import Text from "../components/Text";
import { ListItem } from "../components/lists";
import CachedImage from "../components/CachedImage";
import routes, { RootStackParamList } from "../navigation/routes";
import { RouteProp } from "@react-navigation/native";
import ContactSellerForm from "../components/ContactSellerForm";

interface ListingDetailsScreenProps {
  route: RouteProp<RootStackParamList, routes.LISTING_DETAILS>;
}

const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({
  route,
}) => {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View>
        <CachedImage
          uri={listing.images[0].url}
          preview={listing.images[0].thumbnailUrl}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text>{listing.title}</Text>
          <Text color="secondary">${listing.price}</Text>
          <Text style={styles.description}>{listing.description}</Text>
          <View style={styles.userContainer}>
            <ListItem
              avatar={require("../assets/avatar.png")}
              title="Nelson K"
              subtitle="5 listings"
            />
          </View>
          <View style={styles.contactForm}>
            <ContactSellerForm listing={route.params} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  view: {},
  content: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  description: {
    marginTop: 20,
  },
  contactForm: {},
});

export default ListingDetailsScreen;
