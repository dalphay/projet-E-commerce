import { Injectable } from '@angular/core';
import { Produit } from '../entities/produit';

@Injectable({
  
  providedIn: 'root'
})
export class PanierService {


  panier:Produit[];
  
    constructor() {
      if (this.read('panier') === null) {
        this.panier = [];
        this.save();
      }
      this.panier = this.read('panier');
    }
    
   getAllProduits(): Produit[] {
      return this.panier;
    }
  
    addProduit(produit:Produit):Produit[] {
      this.panier.push(produit);
      this.save();
      return this.panier;
    }

    deleteProduit(id:number):void {
      this.panier.splice(id, 1);
      this.save();
    }

    clearCart():Produit[] {
      this.panier = [];
      this.save();
      return this.panier;
    }
  
    private save():void {
      let json:string = JSON.stringify(this.panier);;
      localStorage.setItem('panier', json);
    }
  
    private read(itemName:string) {
      let json = localStorage.getItem(itemName);
      return JSON.parse(json);
  }

}
