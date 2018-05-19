import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';
import { Produit } from '../entities/produit';
// import { Produit } from 'src/app/entities/produit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  panier : Produit [];

  constructor(private panierService: PanierService) { }

  ngOnInit() {
    this.panier = this.panierService.getAllProduits(); 
  }

}
