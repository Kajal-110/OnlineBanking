import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICreatepin } from '../../interface/icreatepin';
import { CreatepinService } from '../../services/createpin.service';

@Component({
  selector: 'app-createpin',
  templateUrl: './createpin.component.html',
  styleUrls: ['./createpin.component.css']
})
export class CreatepinComponent implements OnInit {

  
  CerdHolderName:FormControl=new FormControl();
  EnterPassword:FormControl=new FormControl();

  constructor(private createpin:CreatepinService) { }

  ngOnInit(): void {
  }
  pinCreated(){
    let pin:ICreatepin={
      CerdHolderName:this.CerdHolderName.value,
      EnterPassword:this.EnterPassword.value
    }
    this.createpin.createPin(pin);
    console.log(pin);
    
  }

}
