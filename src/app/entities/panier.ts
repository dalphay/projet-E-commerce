import { Produit } from "src/app/entities/produit";

export interface Panier {
    id:number,
    articles: Produit,
    description: string,
    total:string,

}
