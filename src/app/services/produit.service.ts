import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../entities/produit';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits:Produit[]
  constructor(private httpClient: HttpClient) {
  }

  /**method pour recupérer tous les produits */   
  getAllProduit() {
    return this.httpClient.get<Produit[]>(`http://localhost:8080/product/`).pipe(
      tap(value => {
        console.log(value);
        this.produits = value;
      })
    )
  }

  /**method pour recupérer un produit par l'id */
   
  getProduit(id) {
    return this.httpClient.get<Produit>(`http://localhost:8080/product/${id}`).pipe(
      tap(value => {
        // this.localStorageService.setItem(`produit.${id}`, value);
        
      })
    )
  }
}