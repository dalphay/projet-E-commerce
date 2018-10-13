import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulaire-db',
  templateUrl: './formulaire-db.component.html',
  styleUrls: ['./formulaire-db.component.scss']
})
export class FormulaireDbComponent implements OnInit {

  constructor(private Http: HttpClient) { }

  ngOnInit() {
  }

  addDB(forms:NgForm){
    this.Http.post('http://localhost:8080/addproduits', forms.form.value).subscribe(value => {console.log(value)})

    console.log(forms.form.value);

  }

}
