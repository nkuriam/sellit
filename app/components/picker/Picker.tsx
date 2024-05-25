import React, { Fragment, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../../config/theme";
import Text from "../Text";
import SafeView from "../SafeView";
import PickerItem, { PickerItemProps } from "./PickerItem";

export interface PickerProps {
  icon?: string;
  items: PickerItemProps[];
  numberOfColumns?: number;
  PickerItemComponent?: React.ComponentType<any>;
  onSelectItem?(item: PickerItemProps): void;
  selectedItem?: PickerItemProps | null;
  placeholder: string;
}

const Picker: React.FC<PickerProps> = ({
  icon,
  items,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
  onSelectItem = () => {},
  selectedItem,
  placeholder,
}) => {
  const [visibleModal, setModalVisible] = useState(false);

  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={theme.colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem && (
            <Text style={styles.text}>{selectedItem.label}</Text>
          )}

          {!selectedItem && (
            <Text style={styles.placeholderText}>{placeholder}</Text>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={theme.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visibleModal} animationType="slide">
        <SafeView padding>
          <FlatList
            numColumns={numberOfColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                selected={
                  selectedItem ? selectedItem.value === item.value : false
                }
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </SafeView>
      </Modal>
    </Fragment>
  );
};
// selected={selectedItem.value === item.value}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  close: {
    alignSelf: "flex-end",
  },
  placeholderText: {
    flex: 1,
    color: theme.colors.medium,
  },
});

export default Picker;
