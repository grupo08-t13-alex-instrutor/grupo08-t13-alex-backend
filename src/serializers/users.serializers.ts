import * as yup from "yup";
import { SchemaOf } from "yup";
import { iUserRequest, iUserResponse, iUserUpdate } from "../interfaces/User";

const userRequestSerializer: SchemaOf<iUserRequest> = yup.object().shape({
    name: yup.string()
        .max(250)
        .matches( /.*([^*.!@$%^&(){}[\]:;<>,.?\/~_+-=\|]+){1, 250}/, 'Não pode conter caracteres especiais' )
        .required( 'O campo name é obrigatório!' ),
    cpf: yup.string()
        .matches( /([0-9]{3})([.]{1})([0-9]{3})([.]{1})([0-9]{3})([-]{1})([0-9]{2})/, 'O padrão de cpf é 000.000.000-00' )
        .required( 'O campo cpf é obrigatório!' ),
    email: yup.string()
        .email()
        .matches( /@*?(hotmail.com|gmail.com|outlook.com|kenzie.com)/, 'Deve ser do tipo "hotmail.com", "gmail.com", "outlook.com" ou "kenzie.com"' )
        .required( 'O campo email é obrigatório!' ),
    password: yup.string()
        .min(8, 'Deve conter pelo menos 8 caracteres' )
        .matches(/^(?=.*[a-z])/, 'Deve conter pelo menos uma letra minúscula' )
        .matches(/^(?=.*[A-Z])/, 'Deve conter pelo menos uma letra maiúscula' )
        .matches(/^(?=.*[0-9])/, 'Deve conter pelo menos um número' )
        .matches(/^(?=.*[*.!@$%^&(){}[\]:;<>,\.?\/~_+-=\|]{8, 32})/, 'Deve conter pelo menos um caracter especial' )
        .required( 'O campo password é obrigatório!' ),
    telephone: yup.string()
        .matches( /([(]{1})([0-9]{2})([)]{1})([0-9]{5})([-]{1})([0-9]{4})/, 'O padrão para o telefone é (00)00000-0000' )
        .required( 'O campo telephone é obrigatório!' ),
    date_of_birth: yup.string()
        .matches( /([0-9]{2})([\/]{1})([0-9]{2})([\/]{1})([0-9]{4})/, 'O padrão de date_of_birth é "00/00/0000"')
        .required( 'O campo data_of_birth é obrigatório!' ),
    description: yup.string().max(300, 'Deve ter no máximo 300 caracteres' ).required( 'O campo description é obrigatório!' ),
    buyer: yup.boolean().optional(),
    address: yup.string()
        .uuid( 'Deve ser do tipo uuid' )
        .required( 'O campo address deve receber o id. É obrigatório!' )
});

const userUpdateSerializer: SchemaOf<iUserUpdate> = yup.object().shape({
    name: yup.string().max(250).optional(),
    cpf: yup.string()
        .matches( /([0-9]{3})([.]{1})([0-9]{3})([.]{1})([0-9]{3})([-]{1})([0-9]{2})/, 'O padrão de cpf é 000.000.000-00' )
        .optional(),
    email: yup.string().email().optional(),
    password: yup.string()
        .min(8, 'Deve conter pelo menos 8 caracteres' )
        .matches(/^(?=.*[a-z])/, 'Deve conter pelo menos uma letra minúscula' )
        .matches(/^(?=.*[A-Z])/, 'Deve conter pelo menos uma letra maiúscula' )
        .matches(/^(?=.*[0-9])/, 'Deve conter pelo menos um número' )
        .matches(/^(?=.*[*.!@$%^&(){}[\]:;<>,\.?\/~_+-=\|]{8, 32})/, 'Deve conter pelo menos um caracter especial' )
        .optional(),
    telephone: yup.string()
        .matches( /([(]{1})([0-9]{2})([)]{1})([0-9]{5})([-]{1})([0-9]{4})/, 'O padrão para o telefone é (00)00000-0000' )
        .optional(),
    date_of_birth: yup.string()
        .matches( /([0-9]{2})([\/]{1})([0-9]{2})([\/]{1})([0-9]{4})/, 'O padrão de date_of_birth é "00/00/0000"')
        .optional(),
    description: yup.string().max(300).optional(),
});

const userResponseSerializer: SchemaOf<iUserResponse> = yup.object().shape({
    id: yup.string(),
    name: yup.string().max(250),
    cpf: yup.string(),
    email: yup.string().email(),
    telephone: yup.string(),
    date_of_birth: yup.string(),
    description: yup.string().max(300),
    buyer: yup.boolean(),
    createdAt: yup.date(),
    updatedAt: yup.date(),
});

const allUsersResponseSerializer: SchemaOf<iUserResponse[]> = yup.array(userResponseSerializer)

export { userRequestSerializer, userUpdateSerializer, userResponseSerializer, allUsersResponseSerializer };
