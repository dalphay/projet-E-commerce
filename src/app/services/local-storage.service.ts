import { Injectable } from '@angular/core';
import { Produit } from '../entities/produit';


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

    for(var i = 0, i < localStorage.length; i++){
      let parsedJson: Produit = JSON.parse(localStorage.getItem.key(i))
      produits.push(parsedJson)
    }

    return produits
  }
}
