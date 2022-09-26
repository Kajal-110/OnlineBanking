import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreate } from '../../interface/icreate';
import { CreateServiceService } from '../../services/create-service.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  
  name:FormControl=new FormControl("",[Validators.required, Validators.minLength(3), Validators.maxLength(10),
    Validators.pattern("[a-zA-Z].*")]);
  email:FormControl=new FormControl("");
  password:FormControl=new FormControl("");
  address:FormControl=new FormControl("");
  dateofbirth:FormControl=new FormControl("");
   mobileNo:FormControl=new FormControl("");
  gender:FormControl=new FormControl("");
  amount:FormControl=new FormControl("");
 
  ngOnInit(): void {
  }
 
 
  constructor( private createServices:CreateServiceService) { }

  submit(){
    let details:ICreate ={
        name:this.name.value,
        email:this.email.value,
         password:this.password.value,
         address:this.address.value,
        dateofbirth:this.dateofbirth.value,
         mobileNo:this.mobileNo.value,
         gender:this.gender.value,
        amount:this.amount.value
     };
     
    this.createServices.createDetail(details);
    console.log(details);
    console.log("Done");
    console.log(alert("Account created successflly"))
  }
 
  

  
}
