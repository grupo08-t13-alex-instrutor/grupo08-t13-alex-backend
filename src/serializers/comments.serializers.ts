import * as yup from "yup";
import { userResponseSerializer } from "./users.serializers";
import { adsResponseSerializer } from "./ads.serializers";

const commentRequestSerializer = yup.object().shape({
  description: yup.string().max(300).required( 'O campo description é obrigatório!' ),
});

const commentResponseSerializer = yup.object().shape({
  id: yup.string(),
  description: yup.string(),
  createdAt: yup.date(),
  user: userResponseSerializer,
  advertisement: adsResponseSerializer,
});

export { commentRequestSerializer, commentResponseSerializer };
