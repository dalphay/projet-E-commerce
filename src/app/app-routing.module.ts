import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitFicheComponent } from './produit-fiche/produit-fiche.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: ProduitListComponent },
  { path: 'produit-fiche', component: ProduitFicheComponent },
  // { path: 'movie', component:  MovieComponent},
  { path: '**', component: NotFoundComponent },
  
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
