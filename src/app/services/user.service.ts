import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:Object;
  constructor(private httpClient: HttpClient) { }

  login(password: string, email: string){
    let user =JSON.stringify({password: password, email: email})
      
    let headers= new HttpHeaders().set('Content-Type','application/json')
  
    console.log(user);
    
    return this.httpClient.post(`https://www.simplonlyon.fr/promo5/adiallo/certifback/user/login`, JSON.stringify({password: password, email: email}),{headers:headers,observe:'response'} )
    
  }
}
