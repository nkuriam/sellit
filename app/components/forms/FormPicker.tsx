import React from "react";
import {
  useFormikContext,
  FormikContextType,
  FormikProps,
  FormikValues,
} from "formik";
import { View, StyleSheet } from "react-native";

import Picker, { PickerProps } from "../picker/Picker";
import ErrorMessage from "./ErrorMessage";
import { PickerItemProps } from "../picker/PickerItem";

interface FormPickerProps extends PickerProps {
  name: string;
}

const FormPicker: React.FC<FormPickerProps> = ({
  name,
  placeholder,
  items,
  ...restProps
}) => {
  const { setFieldValue, values, touched, errors } = useFormikContext<
    FormikValues
  >();

  return (
    <View style={styles.container}>
      <Picker
        {...restProps}
        items={items}
        placeholder={placeholder}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
      />
      {touched[name] && (
        <View style={styles.error}>
          <ErrorMessage error={errors[name] as string} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "column",
  },
  error: {
    marginTop: 5,
  },
});

export default FormPicker;
