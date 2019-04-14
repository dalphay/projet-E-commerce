import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { Produit } from '../entities/produit';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits:Produit[];

  private url: string;
  private apiKey: string;
  private format: string;
  private filterRelease: string;
  private httpOptions: Object;
  

  private year: string;


  httpParams = {

  }
  constructor(private http: HttpClient, private jsonp: HttpClientJsonpModule) {
    this.url = "https://www.giantbomb.com/api/";
    this.apiKey = "393b6596b4dc77b7c17ae66bd42cefe0b52c106f"
    this.format = "jsonp"
    this.year = "2018"
    this.filterRelease = "field:2018-01-01|2018-31-12&sort=original_release_date:desc"

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers": "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN",
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      }),
      params: new HttpParams()
        .set("api_key", this.apiKey)
        .set('format', this.format)

    };
  }


  /**method pour recupérer tous les produits */   
  getAllProduit() {
    return this.httpClient.get<Produit[]>(`https://www.simplonlyon.fr/promo5/adiallo/certifback/product`).pipe(
      tap(value => {
        console.log(value);
        this.produits = value;
      })
    )
  }

  /**method pour recupérer un produit par l'id */
   
  getProduit(id) {
    return this.httpClient.get<Produit>(`https://www.simplonlyon.fr/promo5/adiallo/certifback/product/${id}`).pipe(
      tap(value => {
        // this.localStorageService.setItem(`produit.${id}`, value);
        
      })
    )
  }
}