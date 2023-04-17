import * as yup from "yup";

const imageRequestSerializer = yup.object().shape({
  link: yup.string().required(),
});

const imageUpdateSerializer = yup.object().shape({
  id: yup.string(),
  link: yup.string()
});

const imageResponseSerializer = yup.object().shape({
  id: yup.string(),
  link: yup.string(),
});

export { imageRequestSerializer, imageUpdateSerializer, imageResponseSerializer };
