import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  imageRequestSerializer,
  imageResponseSerializer,
  imageUpdateSerializer,
} from "./image.serializers";
import { IAdRequest, IAdResponse, IAdUpdateRequest } from "../interfaces/Ads";

const adsRequestSerializer: SchemaOf<IAdRequest> = yup.object().shape({
  brand: yup.string().max(250).required( 'O campo brand é obrigatório!' ),
  model: yup.string().max(250).required( 'O campo model é obrigatório!' ),
  year: yup.string()
    .matches( /[0-9]{4}/, 'Deve conter apenas números (0000)' )
    .required( 'O campo year é obrigatório!' ),
  fuel: yup.number().required( 'O campo fuel é obrigatório!' ),
  mileage: yup.number().required( 'O campo mileage é obrigatório!' ),
  color: yup.string().max(50).required( 'O campo color é obrigatório!' ),
  price: yup.number().required( 'O campo price é obrigatório!' ),
  description: yup.string().max(300).required( 'O campo description é obrigatório!' ),
  published: yup.boolean().default(true),
  images: yup.array(imageRequestSerializer).max(250).required( 'O campo images é obrigatório!' ),
});

const adsUpdateSerializer: SchemaOf<IAdUpdateRequest> = yup.object().shape({
  brand: yup.string().optional(),
  model: yup.string().optional(),
  year: yup.string()
    .matches( /[0-9]{4}/, 'Deve conter apenas números (0000)' )
    .optional(),
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

export { adsRequestSerializer, adsUpdateSerializer, adsResponseSerializer, listingAdsSerializer };
