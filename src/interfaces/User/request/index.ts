export interface iUserRegisterReq {
    name: string;
    cpf: string;
    email: string;
    password: string;
    telephone: string;
    date_of_birth: string;
    description: string;
    buyer?: boolean;
    addressId: string;
}

export interface iUserUpdateReq {
    name?: string;
    cpf?: string;
    email?: string;
    password?: string;
    telephone?: string;
    date_of_birth?: string;
    description?: string;
}