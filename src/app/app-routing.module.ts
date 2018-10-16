import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitFicheComponent } from './produit-fiche/produit-fiche.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PanierComponent } from 'src/app/panier/panier.component';
import { UserAccountComponent } from './user-account/user-account.component';


const routes: Routes = [
  { path: '', component: ProduitListComponent },
  { path: 'user/:id', component: ProduitListComponent },
  { path: 'produit-fiche/:id', component: ProduitFicheComponent },
  { path: 'panier', component: PanierComponent }, 
  { path: 'user-account', component: UserAccountComponent },  

  // { path: 'movie', component:  MovieComponent},
  { path: '**', component: NotFoundComponent },
  
  
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
