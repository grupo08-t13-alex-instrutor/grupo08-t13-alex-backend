import { iImageRequest, iImageUpdateRequest } from "../../Img/request";


export interface IAdUpdateRequest {
    brand?: string;
    model?: string;
    year?: string;
    fuel?: number;
    mileage?: number;
    color?: string;
    price?: number;
    description?: string;
    published?: boolean;
    images?: iImageUpdateRequest[];
}

export interface IAdRequest {
    brand: string;
    model: string;
    year: string;
    fuel: number;
    mileage: number;
    color: string;
    price: number;
    description: string;
    published?: boolean;
    images: iImageRequest[];
}



