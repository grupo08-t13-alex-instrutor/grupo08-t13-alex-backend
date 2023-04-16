import * as yup from "yup";

const imageRequestSerializer = yup.object().shape({
  link: yup.string().required(),
});

const imageResponseSerializer = yup.object().shape({
  id: yup.string(),
  link: yup.string(),
});

export { imageRequestSerializer, imageResponseSerializer };
