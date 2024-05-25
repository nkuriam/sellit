import React, { Fragment } from "react";
import { StyleSheet, GestureResponderEvent } from "react-native";
import { Listing } from "../models/listing";
import { Message } from "../models/messages";
import { ListItem, ListItemAction } from "./lists";

interface ListingItemProps {
  onPress?(event: GestureResponderEvent): void;
  onDelete?(listing: Listing): void;
  onEdit?(listing: Listing): void;
  listing: Listing;
}

const ListingItem: React.FC<ListingItemProps> = ({
  listing,
  onEdit,
  onPress,
  onDelete,
}) => {
  return (
    <ListItem
      title={listing.title}
      subtitle={`$${listing.price}`}
      avatar={{ uri: listing.images[0].thumbnailUrl }}
      onPress={onPress}
      rightActions={() => {
        return (
          <Fragment>
            {onDelete && (
              <ListItemAction
                action="delete"
                onPress={() => onDelete(listing)}
              />
            )}
            {onEdit && (
              <ListItemAction action="delete" onPress={() => onEdit(listing)} />
            )}
          </Fragment>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ListingItem;
