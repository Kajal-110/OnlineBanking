import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IStopCheque } from '../../interface/istop-cheque';
import { StopChequeService } from '../../services/stop-cheque.service';

@Component({
  selector: 'app-stop-cheque',
  templateUrl: './stop-cheque.component.html',
  styleUrls: ['./stop-cheque.component.css']
})
export class StopChequeComponent implements OnInit {


  AccountHolderName:FormControl=new FormControl("");
  PartyName:FormControl=new FormControl("");
   TypeOfBankAccount:FormControl=new FormControl("");
  AccountNumber:FormControl=new FormControl("");
  CheckNumber:FormControl=new FormControl("");
  Amount:FormControl=new FormControl("");
  CheckStopPaymentReasone:FormControl=new FormControl("");
  DateOnTheCheck:FormControl=new FormControl("");
  
  constructor( private stopcheque:StopChequeService) { }

  ngOnInit(): void {
  }
  stopCheqhes(){
    let stop:IStopCheque={
      AccountHolderName:  this. AccountHolderName.value,
      PartyName: this.PartyName.value,
      TypeOfBankAccount:this.TypeOfBankAccount.value,
      AccountNumber:this.AccountNumber.value,
      CheckNumber:this.CheckNumber.value,
      Amount:this.Amount.value,
      CheckStopPaymentReasone:this.CheckStopPaymentReasone.value,
      DateOnTheCheck:this. DateOnTheCheck.value
    };
    this.stopcheque.addStopCheque(stop)
    console.log(stop);
  }

}