import * as Yup from "yup";

export const LoginCredentialsSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

export type LoginCredentialsType = Yup.InferType<typeof LoginCredentialsSchema>;
