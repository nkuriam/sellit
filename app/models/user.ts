import * as Yup from "yup";

export type User = { name: string; email: string; id: number };

export const UserRegistrationSchema = Yup.object()
  .shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password"),
  })
  .required();

export type UserRegistrationType = Yup.InferType<typeof UserRegistrationSchema>;
