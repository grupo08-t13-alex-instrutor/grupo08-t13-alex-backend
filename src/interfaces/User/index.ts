import { Interface } from "readline"

export interface iUserRequest{
    name: string;
    cpf: string;
    email: string;
    password: string;
    telephone: number;
    date_of_birth: string;
    description: string;
}

export interface iUserResponse{
    id: string;
    name: string;
    cpf: string;
    email: string;
    telephone: number;
    date_of_birth: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}