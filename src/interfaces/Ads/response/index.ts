import { iImageResponse } from "../../Img/response";

export interface iUserAdResponse {
    id: string;
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
