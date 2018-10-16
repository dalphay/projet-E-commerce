import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitFicheComponent } from './produit-fiche/produit-fiche.component';
import { MatMenuModule } from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './panier/panier.component';
import { ProduitService } from 'src/app/services/produit.service';
import { PanierService } from 'src/app/services/panier.service';
import { UserAccountComponent } from './user-account/user-account.component';



@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent,
    ProduitFicheComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    PanierComponent,
    UserAccountComponent,
  ],
  
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule   
  ],
  providers: [
    ProduitService
    // PanierService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
