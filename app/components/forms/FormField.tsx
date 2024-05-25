import React from "react";
import { FormikValues, useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";

import TextInput, { AppTextInputProps } from "../TextInput";
import ErrorMessage from "./ErrorMessage";

interface FormFieldPickerProps extends AppTextInputProps {
  name: string;
}

const FormField: React.FC<FormFieldPickerProps> = ({ name, ...restProps }) => {
  const {
    handleChange,
    values,
    handleBlur,
    touched,
    errors,
  } = useFormikContext<FormikValues>();

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        {...restProps}
      />
      {touched[name] && (
        <View style={styles.error}>
          <ErrorMessage error={errors[name] as string} />
        </View>
      )}
    </View>
  );
};

FormField.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "column",
  },
  error: {
    marginTop: 5,
  },
});

export default FormField;
