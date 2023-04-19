import * as yup from "yup";
import { SchemaOf } from "yup";
import { iAdressRequest,iAdressRespopnse,iAdressUpdate } from "../interfaces/Adress";

const adressRequestSerializer: SchemaOf<iAdressRequest> = yup.object().shape({
    cep: yup.string().max(8).required(),
    state:  yup.string().required(),
    city:  yup.string().required(),
    street:  yup.string().required(),
    number:  yup.number().required(),
    complement:  yup.string().required()
});

const adressResponseSerializer: SchemaOf<iAdressRespopnse> = yup.object().shape({
    id: yup.string().required(),
    cep: yup.string().max(8).required(),
    state:  yup.string().required(),
    city:  yup.string().required(),
    street:  yup.string().required(),
    number:  yup.number().required(),
    complement:  yup.string().required()
});

const adressUpdateSerializer: SchemaOf<iAdressUpdate> = yup.object().shape({
    cep: yup.string().max(8).notRequired(),
    state:  yup.string().notRequired(),
    city:  yup.string().notRequired(),
    street:  yup.string().notRequired(),
    number:  yup.number().notRequired(),
    complement:  yup.string().notRequired()
});

export {adressRequestSerializer, adressResponseSerializer, adressUpdateSerializer}