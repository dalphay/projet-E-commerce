import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  constructor(private service:UserService,private router : Router) { }
  email:string;
  password:string;
  ngOnInit() {
  }
  check(event){
    console.log(event);
    this.email = event.target.value
  }
  check2(event){
    this.password = event.target.value
                                                                                                                            
    console.log(event);
  }
  submit() {
    this.service.login(this.password,this.email).subscribe(value =>{
      this.router.navigate(["user",value.body])
      this.service.user = value.body;
      console.log(value.body);
    })
  }
}
