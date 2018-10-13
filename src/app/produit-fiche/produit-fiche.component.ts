import { Component, OnInit } from '@angular/core';
import { Produit } from '../entities/produit';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit-fiche',
  templateUrl: './produit-fiche.component.html',
  styleUrls: ['./produit-fiche.component.scss']
})
export class ProduitFicheComponent implements OnInit {

  produit : Produit = {category: "", description: ""​​, id: 0, ​​​images: "", marque: "", name: "", prix: ""};

  constructor(private service : ProduitService, private route: ActivatedRoute) {
    this.service.getProduit(this.route.snapshot.params.id).subscribe(value => {this.produit = value});

  }

  ngOnInit() {
  }
  
}
