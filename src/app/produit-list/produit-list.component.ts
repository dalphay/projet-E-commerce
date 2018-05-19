import { Component, OnInit } from '@angular/core';
import { Produit } from '../entities/produit';
import { ProduitService } from '../services/produit.service';
import { PanierService } from 'src/app/services/panier.service';



@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent implements OnInit {

  produits : Produit[]

  constructor(private service : ProduitService, private panier : PanierService) { }

  ngOnInit() {
    this.service.getAllProduit().subscribe(value => {
      this.produits = value;
      console.log(value)
    })
  }

  addProduitInPanier(id) {
    this.panier.addProduit(id)
    console.log(this.panier.panier)
  }

  // deleteProduit(id){
  //   this.panier.splice(id, 1)
  // }

}
