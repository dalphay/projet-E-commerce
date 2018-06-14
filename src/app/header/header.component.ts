import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/entities/produit';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  panier : Produit [];
  constructor(private panierService: PanierService) { }

  ngOnInit() {

    this.panier = this.panierService.getAllProduits();
  }
}
