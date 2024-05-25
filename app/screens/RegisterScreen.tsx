import React, { useState } from "react";
import SafeView from "../components/SafeView";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import users from "../api/users";
import auth from "../api/auth";
import useAuth from "../hooks/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import { UserRegistrationSchema, UserRegistrationType } from "../models/user";

const validationSchema = UserRegistrationSchema;

const RegisterScreen = () => {
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const usersApi = useApi(users.register);
  const authApi = useApi(auth.login);

  const initialValues: UserRegistrationType = validationSchema.default();

  const handleSubmit = async (values: UserRegistrationType) => {
    const response = await usersApi.request(values);

    if (!response.ok) {
      if (response.status === 400) return setError(response.data.error);

      return setError("An Unexpected error happened");
    }

    setError(null);

    //proceed to login
    const { data: authToken } = await authApi.request(
      values.email,
      values.password
    );

    login(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={usersApi.loading || authApi.loading} />
      <SafeView padding>
        <Form
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <FormField name="name" icon="account" placeholder="Name" />

          <FormField
            name="email"
            icon="email"
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />

          <FormField
            name="password"
            icon="lock"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            textContentType="password"
          />
          {error && <ErrorMessage error={error} />}
          <SubmitButton title="Register" />
        </Form>
      </SafeView>
    </>
  );
};

export default RegisterScreen;
