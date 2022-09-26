import { Component, OnInit } from '@angular/core';
import { ChequeService } from '../../services/cheque.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ICheque } from '../../interface/icheque';

@Component({
  selector: 'app-check-book',
  templateUrl: './check-book.component.html',
  styleUrls: ['./check-book.component.css']
})
export class CheckBookComponent implements OnInit {

    accountnumber:FormControl=new FormControl("");
    accounttype:FormControl=new FormControl("");
    branch:FormControl=new FormControl("");
    theresholdlimit:FormControl=new FormControl("");
    checkbooks:FormControl=new FormControl("");
    checkleaves:FormControl=new FormControl("");

  constructor( private chequeservice:ChequeService) { }

  ngOnInit(): void {
  }
  chequeSubmit(){
    let cheque:ICheque = {
      accountnumber: this.accountnumber.value,
      accounttype: this.accounttype.value,
      branch:this.branch.value,
      theresholdlimit: this.theresholdlimit.value,
      checkbooks: this.checkbooks.value,
      checkleaves: this.checkleaves.value,
    };
    this.chequeservice.addCheque(cheque);
    console.log(cheque);
  }

}
