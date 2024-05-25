import React, { Fragment } from "react";
import { StyleSheet, Image } from "react-native";
import SafeView from "../components/SafeView";
import {
  FormField,
  SubmitButton,
  Form,
  ErrorMessage,
} from "../components/forms";
import useAuth from "../hooks/useAuth";
import authApi from "../api/auth";
import { LoginCredentialsSchema, LoginCredentialsType } from "../models/auth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = LoginCredentialsSchema;

const LoginScreen = () => {
  const authApiLogin = useApi(authApi.login);
  const auth = useAuth();
  const initialValues: LoginCredentialsType = validationSchema.default();

  const handleSubmit = async (values: LoginCredentialsType) => {
    const response = await authApiLogin.request(values);

    if (!response.ok) return;

    const authToken = response.data as string;
    auth.login(authToken);
  };

  return (
    <Fragment>
      <ActivityIndicator visible={authApiLogin.loading} />
      <SafeView padding>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Form
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <FormField
            name="email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            keyboardType="email-address"
            // only works on Ios.
            // autofill from keychain
            textContentType="emailAddress"
          />

          <FormField
            name="password"
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry
            // only works on Ios.
            // autofill from keychain
            textContentType="password"
          />

          {authApiLogin.error && (
            <ErrorMessage error={"Invalid login or password"} />
          )}

          <SubmitButton title="Login" disabledIfInvalid />
        </Form>
      </SafeView>
    </Fragment>
  );
};

LoginScreen.defaultProps = {};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
