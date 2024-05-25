import React from "react";
import { StyleSheet, GestureResponderEvent } from "react-native";
import { Message } from "../models/messages";
import { ListItem, ListItemAction } from "./lists";

interface MessageItemProps {
  onPress?(event: GestureResponderEvent): void;
  onDelete(message: Message): void;
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({
  message,
  onPress,
  onDelete,
}) => {
  return (
    <ListItem
      title={message.fromUser.name}
      subtitle={message.content}
      // avatar={message.image}
      onPress={onPress}
      rightActions={() => {
        return (
          <ListItemAction action="delete" onPress={() => onDelete(message)} />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MessageItem;
