import { Notifications } from "expo";
import { FormikHelpers } from "formik";
import React from "react";
import { Alert, Keyboard } from "react-native";
import messagesApi from "../api/messages";
import { Listing } from "../models/listing";
import { Form, FormField, SubmitButton } from "./forms";

interface ContactSellerFormProps {
  listing: Listing;
}

type FormValues = { message: string };

const ContactSellerForm: React.FC<ContactSellerFormProps> = ({ listing }) => {
  const initialValues: FormValues = { message: "" };
  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    const response = await messagesApi.sendMessage({
      listingId: listing.id,
      message: values.message,
    });

    if (!response.ok) {
      return Alert.alert("Error", "Could not send the message");
    }

    // dismiss keyboard
    Keyboard.dismiss();

    // empty message
    formikHelpers.resetForm();

    // display local notificaion
    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message has been successfuly sent!",
    });
  };

  return (
    <Form onSubmit={handleSubmit} initialValues={initialValues}>
      <FormField name="message" placeholder="Message..." />

      <SubmitButton title="Contact seller" />
    </Form>
  );
};

export default ContactSellerForm;
