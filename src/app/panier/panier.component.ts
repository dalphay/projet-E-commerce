import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';
import { Produit } from '../entities/produit';
import { UserService } from '../user.service';
// import { Produit } from 'src/app/entities/produit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  // produits:Produit[];
  panier : Produit [];
  user:Object;
  constructor(private panierService: PanierService,private UserService:UserService) { }

  ngOnInit() {
    // this.dataService.getAll().subscribe(value => this.conproduits = value); 
    this.panier = this.panierService.getAllProduits(); 
    console.log(this.panier)
    if(this.UserService.user) {
      this.user = this.UserService.user
    }
  }

  deleteProduitInPanier(id){

    this.panierService.deleteProduit(id);
    
  }

}
