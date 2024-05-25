import React from "react";
import { FormikProps, FormikValues, useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";

import ErrorMessage from "./ErrorMessage";
import ImageListInput from "../ImageListInput";

interface FormImagePickerProps {
  name: string;
}

const FormImagePicker: React.FC<FormImagePickerProps> = ({
  name,
  ...restProps
}) => {
  const { setFieldValue, values, touched, errors } = useFormikContext<
    FormikValues
  >();

  const imagesUris = values[name];

  const handleAddImage = (imageUri: string) => {
    // add image to values
    setFieldValue(name, [...imagesUris, imageUri]);
  };

  const handleRemoveImage = (imageUri: string) => {
    const hydratedValues = imagesUris.filter((i: string) => i !== imageUri);
    setFieldValue(name, hydratedValues);
  };

  return (
    <View style={styles.container}>
      <ImageListInput
        imagesUris={imagesUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
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

FormImagePicker.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "column",
  },
  error: {
    marginTop: 5,
  },
});

export default FormImagePicker;
