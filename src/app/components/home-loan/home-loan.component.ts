import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../services/loan.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ILoan } from '../../interface/iloan';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-loan',
  templateUrl: './home-loan.component.html',
  styleUrls: ['./home-loan.component.css']
})
export class HomeLoanComponent implements OnInit {

  name:FormControl=new FormControl("");
  email:FormControl=new FormControl("");
  number:FormControl=new FormControl("");
  amount:FormControl=new FormControl("");
  pincode:FormControl=new FormControl("");
  city:FormControl=new FormControl("");
  adharnumber:FormControl=new FormControl("");
  pannumber:FormControl=new FormControl("");
  salary:FormControl=new FormControl("");
  

  constructor(private loanservices:LoanService) { }

  ngOnInit(): void {
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
