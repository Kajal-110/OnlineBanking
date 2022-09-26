import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoan } from '../interface/iloan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(  private http:HttpClient) { }

  addLoanInfo(loan:ILoan){
    let url="https://localhost:44325/api/Loans"
    this.http.post(url,loan)
    .subscribe(result =>console.log("Data Send to Database"));
    console.log(alert("Hello user, your Details in a process mode  if you are eligible for loan we will contact you with 2 days  "))
  }

}
