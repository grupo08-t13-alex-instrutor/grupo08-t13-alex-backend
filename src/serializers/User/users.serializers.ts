import { SchemaOf } from "yup";
import * as yup from "yup";
import { iUserUpdateReq } from "../../interfaces/User/request";
import { iUserResponse } from "../../interfaces/User/response";

const userUpdateSerializer: SchemaOf<iUserUpdateReq> = yup.object().shape({
  name: yup.string().max(250).optional(),
  cpf: yup.string().min(11).max(11).optional(),
  email: yup.string().email().optional(),
  password: yup.string().optional(),
  telephone: yup.string().optional(),
  date_of_birth: yup.string().optional(),
  description: yup.string().max(300).optional(),
});

const userResponseSerializer: SchemaOf<iUserResponse> = yup.object().shape({
  id: yup.string(),
  name: yup.string().max(250),
  cpf: yup.string().min(11).max(11),
  email: yup.string().email(),
  telephone: yup.string(),
  date_of_birth: yup.string(),
  description: yup.string().max(300),
  buyer: yup.boolean(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

const allUsersResponseSerializer: SchemaOf<iUserResponse[]> = yup.array(userResponseSerializer)

export { userUpdateSerializer, userResponseSerializer, allUsersResponseSerializer };



