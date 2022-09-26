import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../services/loan.service';
import { FormControl } from '@angular/forms';
import { ILoan } from '../../interface/iloan';
import { CreateServiceService } from '../../services/create-service.service';
import { ICreate } from '../../interface/icreate';
@Component({
  selector: 'app-personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrls: ['./personal-loan.component.css']
})
export class PersonalLoanComponent implements OnInit {

  Account!:ICreate[]
  name:FormControl=new FormControl("");
  email:FormControl=new FormControl("");
  number:FormControl=new FormControl("");
  amount:FormControl=new FormControl("");
  pincode:FormControl=new FormControl("");
  city:FormControl=new FormControl("");
 adharnumber:FormControl=new FormControl("");
  pannumber:FormControl=new FormControl("");
   salary:FormControl=new FormControl("");

  constructor(private loanservices:LoanService, private createServices:CreateServiceService) { }

  ngOnInit(): void {
    // this.createServices.getAllUser().subscribe(create =>{
    //   this.Account=create
    // });
  }
  addData(){
    let loan:ILoan={
      name: this.name.value,
      email: this.email.value,
      number: this.number.value,
      amount: this.amount.value,
      pincode: this.pincode.value,
      city: this.city.value,
      adharnumber: this.adharnumber.value,
      pannumber: this.pannumber.value,
       salary:this.salary.value
    };
    this.loanservices.addLoanInfo(loan);
    console.log(loan);
  }
}
