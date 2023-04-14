export interface iImageRequest {
    link: string;
}

export interface iImageUpdateRequest {
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
    images?: iImageRequest[];
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
}
