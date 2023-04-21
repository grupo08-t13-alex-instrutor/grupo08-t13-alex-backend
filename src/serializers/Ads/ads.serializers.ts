
import * as yup from "yup";
import { imageRequestSerializer, imageResponseSerializer, imageUpdateSerializer } from "../Img/image.serializers";
import { IAdResponse } from "../../interfaces/Ads/response";
import { SchemaOf } from "yup";
import { IAdRequest, IAdUpdateRequest } from "../../interfaces/Ads/request";


const adsRequestSerializer: SchemaOf<IAdRequest> = yup.object().shape({
  brand: yup.string().max(250).required(),
  model: yup.string().max(250).required(),
  year: yup.string().min(4).max(4).required(),
  fuel: yup.number().required(),
  mileage: yup.number().required(),
  color: yup.string().max(50).required(),
  price: yup.number().required(),
  description: yup.string().max(300).required(),
  published: yup.boolean().default(true),
  images: yup.array(imageRequestSerializer).max(250).required(),
});

const adsUpdateSerializer: SchemaOf<IAdUpdateRequest> = yup.object().shape({
  brand: yup.string().optional(),
  model: yup.string().optional(),
  year: yup.string().optional(),
  fuel: yup.number().optional(),
  mileage: yup.number().optional(),
  color: yup.string().optional(),
  price: yup.number().optional(),
  description: yup.string().optional(),
  published: yup.boolean().optional(),
  images: yup.array(imageUpdateSerializer).optional(),
});


const adsResponseSerializer: SchemaOf<IAdResponse> = yup.object().shape({
  id: yup.string(),
  brand: yup.string(),
  model: yup.string(),
  year: yup.string(),
  fuel: yup.number(),
  mileage: yup.number(),
  color: yup.string(),
  price: yup.number(),
  description: yup.string(),
  published: yup.boolean(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
  images: yup.array(imageResponseSerializer),
  user: yup.object({ id: yup.string() })
});


const listingAdsSerializer: SchemaOf<IAdResponse[]> = yup.array(adsResponseSerializer);

export {
  adsResponseSerializer,
  listingAdsSerializer,
  adsRequestSerializer,
  adsUpdateSerializer
};