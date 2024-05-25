import React, { useState } from "react";
import SafeView from "../components/SafeView";
import { Form, FormField, SubmitButton, FormPicker } from "../components/forms";
import { PickerIconItem } from "../components/picker";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";
import { FormikHelpers } from "formik";
import { ListingEditSchema, ListingEditType } from "../models/listing";

const validationSchema = ListingEditSchema;

const categories = [
  {
    label: "Funiture",
    value: 1,
    icon: { name: "floor-lamp", bgColor: "#fc5c65" },
  },
  {
    label: "Clothing",
    value: 5,
    icon: { name: "shoe-heel", bgColor: "#2bcbba" },
  },
  {
    label: "Cameras",
    value: 3,
    icon: { name: "camera", bgColor: "#fed330" },
  },
  { label: "Cars", value: 2, icon: { name: "car", bgColor: "#fd9644" } },
  {
    label: "Games",
    value: 4,
    icon: { name: "cards", bgColor: "#26de81" },
  },
  {
    label: "Sports",
    value: 6,
    icon: { name: "basketball", bgColor: "#45aaf2" },
  },
  {
    label: "Movies and music",
    value: 7,
    icon: { name: "headphones", bgColor: "#4b7bec" },
  },
  {
    label: "Books",
    value: 8,
    icon: { name: "book-open", bgColor: "#9B68E2" },
  },
  {
    label: "Other",
    value: 9,
    icon: { name: "application", bgColor: "#7C8CA1" },
  },
];

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const initialValues: ListingEditType = validationSchema.default();

  const handleSubmit = async (
    form: ListingEditType,
    formikHelpers: FormikHelpers<ListingEditType>
  ) => {
    setUploadVisible(true);
    const response = await listingsApi.postListing(
      { form, location },
      (progress: number) => setUploadProgress(progress)
    );

    if (!response.ok) {
      setUploadVisible(false);
      console.log(response);

      return alert("Couldn't add new listing");
    }

    formikHelpers.resetForm();

    console.log("Response", response);
  };

  const onDone = () => {
    setUploadVisible(false);
  };

  return (
    <SafeView padding>
      <UploadScreen
        progress={uploadProgress}
        visible={uploadVisible}
        onDone={onDone}
      />
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <FormImagePicker name="images" />

        <FormField maxLength={255} name="title" placeholder="Title" />

        <FormField
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
        />

        <FormPicker
          name="category"
          placeholder="Category"
          items={categories}
          PickerItemComponent={PickerIconItem}
          numberOfColumns={3}
        />

        <FormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />

        <SubmitButton title="POST" />
      </Form>
    </SafeView>
  );
};

export default ListingEditScreen;
