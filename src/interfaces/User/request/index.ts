export interface iUserRegisterReq {
    name: string;
    cpf: string;
    email: string;
    password: string;
    telephone: string;
    date_of_birth: string;
    description: string;
    address: string;
    buyer?: boolean;
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