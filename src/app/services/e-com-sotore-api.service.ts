import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../entities/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Panier } from '../entities/panier';
// import { GiantBombGames } from '../entities/giant-bomb-games';



@Injectable({
  providedIn: 'root'
})
export class EComStoreApiService {
  apiDomain: string = "http://localhost:3000/api/"
  token: string;
  responseLoginData: string;
  panier: Object;
  user:User;
  isLogged:Boolean=false;
  isloggedValidator:BehaviorSubject<Boolean> = new BehaviorSubject(false);
  // productList:BehaviorSubject<GiantBombGames[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  private getToken() {
    return this.token;
  }
  setToken(token) {
  localStorage.setItem('tokenGameStore',JSON.stringify(token));
    this.token = token["id"];
  }
  // setProducts(products){
  //   this.productList.next(products)
  // }
  setTokenNoRemeber(token) {
      this.token = token["id"];
    }
  getTokenLogged(){
    let user = JSON.parse(localStorage.getItem("tokenEComStore"));
    if (user) {
      this.token = user['id'];
    }
    
    return user;
  }
  setLogged(value:Boolean){
    this.isloggedValidator.next(value)
  }
  
  newUser(user) {
    return this.http.post<User>(`${this.apiDomain}users`, user)
  }
  login(user) {
    return this.http.post(`${this.apiDomain}users/login`, user);
  }

  updateUser(userData:User){
    let id = userData.id;
    let beforePost = userData;
    delete beforePost.id;
    return this.http.patch(`${this.apiDomain}clients/${id}?access_token=${this.getToken()}`,beforePost)
    
  }
  logout() {
    this.getToken();
    return this.http.post(`${this.apiDomain}clients/logout?access_token=${this.getToken()}`, this.responseLoginData).pipe(
      tap(value => {
        localStorage.removeItem('tokenGameStore');
        console.log("logout");
        
        this.token = null;
      })
    )
  }
  getPanier(userId) {
    return this.http.get(`${this.apiDomain}clients/${userId}/shoppingCarts?&access_token=${this.getToken()}`)
  }
  getPanierWithProducts(userId) {

    return this.http.get<Panier>(`${this.apiDomain}shoppingCarts/${userId}?filter={"include":["products","client"]}&access_token=${this.getToken()}`)


  }
  createCart(userId) {
    return this.http.get(`${this.apiDomain}clients/${userId}/shoppingCarts?access_token=${this.getToken()}`)

  }

  addProduct(id,product) {
    return this.http.post(`${this.apiDomain}shoppingCarts/${id}/products?access_token=${this.getToken()}`, product)
  }
  deleteProduct(idPanier, idProduct) {
    return this.http.delete(`${this.apiDomain}shoppingCarts/${idPanier}/products/${idProduct}?access_token=${this.getToken()}`)
  }
}


