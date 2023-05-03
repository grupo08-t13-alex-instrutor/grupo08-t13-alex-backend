import * as yup from "yup";
import { userResponseSerializer } from "../User/users.serializers";
import { adsResponseSerializer } from "../Ads/ads.serializers";


const commentRequestSerializer = yup.object().shape({
  description: yup.string().max(300).required({ desciprion: 'Este campo é obrigatório!' }),
});

const commentResponseSerializer = yup.object().shape({
  id: yup.string(),
  description: yup.string(),
  createdAt: yup.date(),
  user: userResponseSerializer,
  advertisement: adsResponseSerializer,
});

export { commentRequestSerializer, commentResponseSerializer };
