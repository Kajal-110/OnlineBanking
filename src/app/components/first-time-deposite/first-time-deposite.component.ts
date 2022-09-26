import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IAmount } from '../../interface/iamount';
import { CreateServiceService } from '../../services/create-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-time-deposite',
  templateUrl: './first-time-deposite.component.html',
  styleUrls: ['./first-time-deposite.component.css']
})
export class FirstTimeDepositeComponent implements OnInit {

  AccountHolderName:FormControl=new FormControl("");
  TotalAmount:FormControl=new FormControl("");


  constructor(private createServices:CreateServiceService,private router:ActivatedRoute) { }
 

  ngOnInit(): void {
  }
  // Submit(){
  //   debugger
  //   let amount:IAmount={
  //     AccountHolderName:this.AccountHolderName.value,
  //     TotalAmount: this.TotalAmount.value
  //   };
  //   this.createServices.createFirsttimedeposite(amount);
    
  // }
  Save(){
   // debugger
    let amount:IAmount={
      AccountHolderName:this.AccountHolderName.value,
      TotalAmount: this.TotalAmount.value
    };
    this.createServices.transfer(amount);
    
  }



}
