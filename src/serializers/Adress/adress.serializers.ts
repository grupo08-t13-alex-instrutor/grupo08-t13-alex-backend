import * as yup from "yup";
import { SchemaOf } from "yup";
import { iAdressRequest, iAdressUpdate } from "../../interfaces/Adress/request";
import { iAdressRespopnse } from "../../interfaces/Adress/response";

const adressRequestSerializer: SchemaOf<iAdressRequest> = yup.object().shape({
    cep: yup.string()
        .matches(/([0-9]{5})([-]{1})([0-9]{3})/, { message: { cep: 'O padrão de cep é 00000-000' } })
        .required({ cep: 'O campo cep é obrigatório!' }),
    state: yup.string().required({ state: 'O campo state é obrigatório!' }),
    city: yup.string().required({ city: 'O campo city é obrigatório!' }),
    street: yup.string().required({ street: 'O campo street é obrigatório!' }),
    number: yup.number().required({ number: 'O campo number é obrigatório!' }),
    complement: yup.string().required({ complement: 'O campo complement é obrigatório!' }),
});

const adressResponseSerializer: SchemaOf<iAdressRespopnse> = yup.object().shape({
    id: yup.string().required(),
    cep: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    number: yup.number().required(),
    complement: yup.string().required()
});

const adressUpdateSerializer: SchemaOf<iAdressUpdate> = yup.object().shape({
    cep: yup.string()
        .matches(/([0-9]{5})([-]{1})([0-9]{3})/, { message: { cep: 'O padrão de cep é 00000-000' } })
        .notRequired(),
    state: yup.string().notRequired(),
    city: yup.string().notRequired(),
    street: yup.string().notRequired(),
    number: yup.number().notRequired(),
    complement: yup.string().notRequired()
});

export { adressRequestSerializer, adressResponseSerializer, adressUpdateSerializer } 