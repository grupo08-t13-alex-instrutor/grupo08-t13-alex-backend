import { iImageResponse } from "../../Img/response";

export interface iUserAdResponse {
    id: string,
    name: string,
    cpf: string,
    email: string,
    telephone: string,
    date_of_birth: string,
    description: string,
    buyer: boolean
}

export interface IAdResponse {
    id: string;
    brand: string;
    model: string;
    year: string;
    fuel: number;
    mileage: number;
    color: string;
    price: number;
    description: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
    images: iImageResponse[];
    user: iUserAdResponse;
}
