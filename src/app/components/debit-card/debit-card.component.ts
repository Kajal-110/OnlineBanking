import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IDebitCard } from '../../interface/idebit-card';
import { DebitCardService } from '../../services/debit-card.service';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.css']
})
export class DebitCardComponent implements OnInit {
    cardnumber:FormControl=new FormControl("");
    cardholder:FormControl=new FormControl("");
    expirationMM:FormControl=new FormControl("");
    expirationYY:FormControl=new FormControl("");
    cvv:FormControl=new FormControl("");

  constructor(private debitCard:DebitCardService) { }

  
  adds! :IDebitCard[];

  ngOnInit(): void {
    this.debitCard.getAllCards().subscribe((data:IDebitCard[]) =>{
      console.log(data);
      this.adds=data;
    })
  }
  
  saveDebitCard(){
    let data:IDebitCard={
      cardnumber: this.cardnumber.value,
      cardholder:this.cardholder.value,
      expirationMM:this.expirationMM.value,
      expirationYY:this.expirationYY.value,
      cvv:this.cvv.value
    }
    this.debitCard.addCard(data);
    console.log(data);
    
  }

  OnSubmit(){

  }
  deleteCard(id:string){
    this.debitCard.deleteCard(id)
    .subscribe(
      res =>{
       // this.getAllCards();
      }
    );

  }
 
 
  

}
