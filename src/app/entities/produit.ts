
export interface Produit {
    id:number,
    name:string,
    price:string,
    description:string,
    category:string,
    marque:string,
    images?: Array<Object>;
    images_tags?: Array<Object>;
    imageURI: string
    qty?:number;
}