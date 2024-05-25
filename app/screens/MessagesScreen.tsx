import React from "react";
import { FlatList } from "react-native";
import SafeView from "../components/SafeView";
import { ListItemSeparator } from "../components/lists";
import MessageItem from "../components/MessageItem";
import { Message } from "../models/messages";
import Fetch from "../components/Fetch";
import messages from "../api/messages";

const MessagesScreen = () => {
  const onDelete = (item: Message) => {
    // waiting to connect to server
    // setMessages(messages.filter((m) => m.id !== item.id));
  };

  return (
    <SafeView>
      <Fetch apiRequest={messages.getMessages}>
        {({ data, loading, request }) => (
          <FlatList
            data={data}
            keyExtractor={(message) => message.id.toString()}
            refreshing={loading}
            onRefresh={request}
            renderItem={({ item }: { item: Message }) => (
              <MessageItem message={item} onDelete={onDelete} />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
        )}
      </Fetch>
    </SafeView>
  );
};

export default MessagesScreen;
