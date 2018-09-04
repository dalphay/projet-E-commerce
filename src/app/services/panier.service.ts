import { Injectable } from '@angular/core';
import { Produit } from '../entities/produit';
import { ProduitService } from '../services/produit.service';



@Injectable({

  /**singleton pour extensier la class du service une seul fois */
  providedIn: 'root'
})
export class PanierService {

  /**intialiser le panier qui est un ensemble de produits */
  panier:Produit[] = [];
    
    constructor() {
    /**verifier si il y'a rien dans le localstorage on le
     *  réinitialise en tableau vide et on le sauvegarde */

      if (this.read('panier') === null) {
        this.save();
      }
      /**S'il y'a quelque chose dans le localstorage,
       *  on le récupère et on le met dans le panier */
      this.panier = this.read('panier');
    }
   /** Récupérer touts les produits d'un panier*/ 
   getAllProduits(): Produit[] {
      return this.panier;
    }
  
    addProduit(produit:Produit):Produit[] {
      this.panier.push(produit);
      this.save();
      return this.panier;
    }
    /**Supprimer un produit à partir de son id */
    deleteProduit(id:number):Produit[] {
      this.panier.splice(id, 1);
      this.save();
      return this.panier;
    }
    /**Vider le panier */
    clearPanier():Produit[] {
      this.panier = [];
      this.save();
      return this.panier;
    }
    /**Sauvegarder le panier dans le localStorage */
    private save():void {
      let json:string = JSON.stringify(this.panier);;
      localStorage.setItem('panier', json);
    }
    /**Lire un panier depuis le localStorage */
    private read(itemName:string) {
      let json = localStorage.getItem(itemName);
      return JSON.parse(json);
  }
}
