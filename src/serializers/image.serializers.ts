import * as yup from "yup";
import { SchemaOf } from "yup";
import { iImageRequest, iImageResponse, iImageUpdateRequest } from "../interfaces/Ads";

const imageRequestSerializer: SchemaOf<iImageRequest> = yup.object().shape({
  link: yup.string().required( 'O campo link é obrigatório!' ),
});

const imageUpdateSerializer: SchemaOf<iImageUpdateRequest> = yup.object().shape({
  id: yup.string(),
  link: yup.string()
});

const imageResponseSerializer: SchemaOf<iImageResponse> = yup.object().shape({
  id: yup.string(),
  link: yup.string(),
});

export { imageRequestSerializer, imageUpdateSerializer, imageResponseSerializer };
