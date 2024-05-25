import React from "react";
import { FlatList } from "react-native-gesture-handler";
import listings from "../api/listings";
import Fetch from "../components/Fetch";
import ListingItem from "../components/ListingItem";
import { ListItemSeparator } from "../components/lists";
import SafeView from "../components/SafeView";
import { Listing } from "../models/listing";

interface MyListingScreenProps {}

const MyListingScreen: React.FC<MyListingScreenProps> = ({}) => {
  return (
    <SafeView>
      <Fetch apiRequest={listings.getMyListings}>
        {({ data, loading, request }) => (
          <FlatList
            data={data}
            keyExtractor={(item: Listing) => item.id.toString()}
            refreshing={loading}
            onRefresh={request}
            renderItem={({ item }) => <ListingItem listing={item} />}
            ItemSeparatorComponent={ListItemSeparator}
          />
        )}
      </Fetch>
    </SafeView>
  );
};

export default MyListingScreen;
