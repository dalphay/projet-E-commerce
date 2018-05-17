import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../entities/produit';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  localStorageService: LocalStorageService
  produits:Produit[]
  constructor(private httpClient: HttpClient) {
    this.localStorageService = new LocalStorageService;
  }

  getAllProduit() {
    return this.httpClient.get<Produit[]>(`http://localhost:3000/produits`).pipe(
      tap(value => {
        this.produits = value;
      })
    )
  }

  getProduit(id) {
    return this.httpClient.get<Produit>(`http://localhost:3000/produits/${id}`).pipe(
      tap(value => {
        this.localStorageService.setItem(`produit.${id}`, value);
      })
    )
  }
}