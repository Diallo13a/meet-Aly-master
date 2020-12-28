export interface Bien{
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    sale: boolean;
    createAt: Date;
    category: string;
}