import * as yup from "yup";
import { SchemaOf } from "yup";
import { iImageResponse } from "../../interfaces/Img/response";
import { iImageRequest, iImageUpdateRequest } from "../../interfaces/Img/request";


const imageRequestSerializer : SchemaOf<iImageRequest>  = yup.object().shape({
  link: yup.string().required(),
});

const imageUpdateSerializer : SchemaOf<iImageUpdateRequest>  = yup.object().shape({
  id: yup.string(),
  link: yup.string()
});

const imageResponseSerializer : SchemaOf<iImageResponse>  = yup.object().shape({
  id: yup.string(),
  link: yup.string(),
});

export { imageRequestSerializer, imageUpdateSerializer, imageResponseSerializer };
