import { Injectable } from '@angular/core';
import { Produit } from '../entities/produit';
// import { ProduitService } from './produit.service';



@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  setItem(key : string, value){
    let json = JSON.stringify(value)
    localStorage.setItem(key, json)
  }

  getAll(){
    let produits = []
  } 
}
