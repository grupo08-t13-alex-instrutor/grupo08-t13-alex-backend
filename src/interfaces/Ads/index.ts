export interface IAdRequest {
    image: [id: string, link: string];
    brand: string;
    model: string;
    year: string;
    fuel: string;
    mileage: number;
    color: string;
    price: number;
    description: string;
}

export interface IAdResponse {
    image?: [id: string, link: string];
    brand?: string;
    model?: string;
    year?: string;
    fuel?: string;
    mileage?: number;
    color?: string;
    price?: number;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
