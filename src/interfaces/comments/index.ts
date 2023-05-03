import { UUID } from "crypto";
import { iUserResponse } from "../User/request";

interface Advertisement {
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
}

export interface commentsResponse {
    id: string;
    description: string;
    createdAt: Date;
    user: iUserResponse;
    advertisement: Advertisement;
}

export interface newDataComment {
    description: string;
    advertisement: UUID;
    user: string;
}
