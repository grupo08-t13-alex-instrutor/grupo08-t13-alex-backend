import { SchemaOf } from "yup";
import * as yup from "yup";
import { iUserUpdateReq } from "../../interfaces/User/request";
import { iUserResponse } from "../../interfaces/User/response";
import { iUserRegisterReq } from "../../interfaces/User/request";

const userRequestSerializer: SchemaOf<iUserRegisterReq> = yup.object().shape({
    name: yup.string()
        .max(250, { name: 'Deve ter no máximo 250 caracteres' })
        .required({ name: 'Este campo é obrigatório!' }),
    cpf: yup.string()
        .matches(/([0-9]{3})([.]{1})([0-9]{3})([.]{1})([0-9]{3})([-]{1})([0-9]{2})/, { message: { cpf: 'O padrão de cpf é 000.000.000-00' } })
        .required({ cpf: 'Este campo é obrigatório!' }),
    email: yup.string()
        .email()
        .matches(/@*?(hotmail.com|gmail.com|outlook.com|kenzie.com)/, { message: { email: 'Deve ser do tipo \'hotmail.com\', \'gmail.com\', \'outlook.com\' ou \'kenzie.com\'' } })
        .required({ email: 'Este campo é obrigatório!' }),
    password: yup.string()
        .min(8, { password: 'Deve conter pelo menos 8 caracteres' })
        .matches(/^(?=.*[a-z])/, { message: { password: 'Deve conter pelo menos uma letra minúscula' } })
        .matches(/^(?=.*[A-Z])/, { message: { password: 'Deve conter pelo menos uma letra maiúscula' } })
        .matches(/^(?=.*[0-9])/, { message: { password: 'Deve conter pelo menos um número' } })
        .matches(/^(?=.*[*.!@$%^&(){}[\]:;<>,.\?/~_+-=\|]).{8,32}$/, { message: { password: 'Deve conter pelo menos um caracter especial' } })
        .required({ password: 'Este campo é obrigatório!' }),
    telephone: yup.string()
        .matches(/([(]{1})([0-9]{2})([)]{1})([0-9]{5})([-]{1})([0-9]{4})/, { message: { telephone: 'O padrão para o telefone é (00)00000-0000' } })
        .required({ telephone: 'Este campo é obrigatório!' }),
    date_of_birth: yup.string()
        .matches(/([0-9]{2})([\/]{1})([0-9]{2})([\/]{1})([0-9]{4})/, { message: { date_of_birth: 'O padrão de date_of_birth é \'00/00/0000\'' } })
        .required({ date_of_birth: 'Este campo é obrigatório!' }),
    description: yup.string().max(300, 'Deve ter no máximo 300 caracteres').required({ description: 'Este campo é obrigatório!' }),
    buyer: yup.boolean().optional(),
    addressId: yup.string()
        .uuid('Deve ser do tipo uuid')
        .required({ addressId: 'Este campo é obrigatório!' })
});

const userUpdateSerializer: SchemaOf<iUserUpdateReq> = yup.object().shape({
    name: yup.string().max(250, { name: 'Deve ter no máximo 250 caracteres' }).optional(),
    cpf: yup.string()
        .matches(/([0-9]{3})([.]{1})([0-9]{3})([.]{1})([0-9]{3})([-]{1})([0-9]{2})/, { message: { cpf: 'O padrão de cpf é 000.000.000-00' } })
        .optional(),
    email: yup.string().email().optional(),
    password: yup.string()
        .min(8, { password: 'Deve conter pelo menos 8 caracteres' })
        .matches(/^(?=.*[a-z])/, { message: { password: 'Deve conter pelo menos uma letra minúscula' } })
        .matches(/^(?=.*[A-Z])/, { message: { password: 'Deve conter pelo menos uma letra maiúscula' } })
        .matches(/^(?=.*[0-9])/, { message: { password: 'Deve conter pelo menos um número' } })
        .matches(/^(?=.*[*.!@$%^&(){}[\]:;<>,.\?/~_+-=\|]).{8,32}$/, { message: { password: 'Deve conter pelo menos um caracter especial' } })
        .optional(),
    telephone: yup.string()
        .matches(/([(]{1})([0-9]{2})([)]{1})([0-9]{5})([-]{1})([0-9]{4})/, { message: { telephone: 'O padrão para o telefone é (00)00000-0000' } })
        .optional(),
    date_of_birth: yup.string()
        .matches(/([0-9]{2})([\/]{1})([0-9]{2})([\/]{1})([0-9]{4})/, { message: { date_of_birth: 'O padrão de date_of_birth é \'00/00/0000\'' } })
        .optional(),
    description: yup.string().max(300, { description: 'Deve ter no máximo 300 caracteres' }).optional(),
});

const userResponseSerializer: SchemaOf<iUserResponse> = yup.object().shape({
    id: yup.string(),
    name: yup.string().max(250, { name: 'deve ter no máximo 250 caracteres' }),
    cpf: yup.string(),
    email: yup.string().email(),
    telephone: yup.string(),
    date_of_birth: yup.string(),
    description: yup.string().max(300, { name: 'deve ter no máximo 300 caracteres' }),
    buyer: yup.boolean(),
    createdAt: yup.date(),
    updatedAt: yup.date(),
});

const allUsersResponseSerializer: SchemaOf<iUserResponse[]> = yup.array(userResponseSerializer)

export { userUpdateSerializer, userResponseSerializer, allUsersResponseSerializer, userRequestSerializer };



