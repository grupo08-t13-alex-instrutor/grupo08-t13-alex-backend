export interface iImageRequest {
    link: string;
}

export interface iUserResponse {
    id: string;
}

export interface iImageUpdateRequest {
    id?: string;
    link?: string;
}

export interface iImageResponse {
    id: string
    link: string;
}

export interface IAdRequest {
    brand: string;
    model: string;
    year: string;
    fuel: string;
    mileage: number;
    color: string;
    price: number;
    description: string;
    published?: boolean;
    images: iImageRequest[];
}

export interface IAdUpdateRequest {
    brand?: string;
    model?: string;
    year?: string;
    fuel?: string;
    mileage?: number;
    color?: string;
    price?: number;
    description?: string;
    published?: boolean;
    images?: iImageUpdateRequest[];
}

export interface IAdResponse {
    id: string;
    brand: string;
    model: string;
    year: string;
    fuel: string;
    mileage: number;
    color: string;
    price: number;
    description: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
    images: iImageResponse[];
    user: iUserResponse;
}
