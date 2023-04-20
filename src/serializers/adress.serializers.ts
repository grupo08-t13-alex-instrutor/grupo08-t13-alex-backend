import * as yup from "yup";
import { SchemaOf } from "yup";
import { iAdressRequest,iAdressRespopnse,iAdressUpdate } from "../interfaces/Adress";

const adressRequestSerializer: SchemaOf<iAdressRequest> = yup.object().shape({
    cep: yup.string()
        .matches( /([0-9]{5})([-]{1})([0-9]{3})/, 'O padrão de cep é 00000-000' )
        .required( 'O campo cep é obrigatório!' ),
    state:  yup.string().required( 'O campo state é obrigatório!' ),
    city:  yup.string().required( 'O campo city é obrigatório!' ),
    street:  yup.string().required( 'O campo street é obrigatório!' ),
    number:  yup.number().required( 'O campo number é obrigatório!' ),
    complement:  yup.string().required( 'O campo complement é obrigatório!' ),
});

const adressResponseSerializer: SchemaOf<iAdressRespopnse> = yup.object().shape({
    id: yup.string().required(),
    cep: yup.string().required(),
    state:  yup.string().required(),
    city:  yup.string().required(),
    street:  yup.string().required(),
    number:  yup.number().required(),
    complement:  yup.string().required()
});

const adressUpdateSerializer: SchemaOf<iAdressUpdate> = yup.object().shape({
    cep: yup.string()
        .matches( /([0-9]{5})([-]{1})([0-9]{3})/, 'O padrão de cep é 00000-000' )
        .notRequired(),
    state:  yup.string().notRequired(),
    city:  yup.string().notRequired(),
    street:  yup.string().notRequired(),
    number:  yup.number().notRequired(),
    complement:  yup.string().notRequired()
});

export {adressRequestSerializer, adressResponseSerializer, adressUpdateSerializer}