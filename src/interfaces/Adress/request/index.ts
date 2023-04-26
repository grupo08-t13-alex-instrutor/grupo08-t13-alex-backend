export interface iAdressRequest {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
}

export interface iAdressUpdate {
    cep?: string;
    state?: string;
    city?: string;
    street?: string;
    number?: number;
    complement?: string;
}
