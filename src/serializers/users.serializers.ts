import * as yup from "yup";

const userRequestSerializer = yup.object().shape({
  name: yup.string().max(250).required(),
  cpf: yup.string().min(11).max(11).required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  telephone: yup.number().required(),
  date_of_birth: yup.string().required(),
  description: yup.string().max(300).required(),
});

const userUpdateSerializer = yup.object().shape({
  name: yup.string().max(250),
  cpf: yup.string().min(11).max(11),
  email: yup.string().email(),
  password: yup.string(),
  telephone: yup.number(),
  date_of_birth: yup.string(),
  description: yup.string().max(300),
});

const userResponseSerializer = yup.object().shape({
  id: yup.string(),
  name: yup.string().max(250),
  cpf: yup.string().min(11).max(11),
  email: yup.string().email(),
  telephone: yup.number(),
  date_of_birth: yup.string(),
  description: yup.string().max(300),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

export { userRequestSerializer, userUpdateSerializer, userResponseSerializer };
