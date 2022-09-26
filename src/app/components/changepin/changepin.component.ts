import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ichange } from 'src/app/interface/ichange';
import { ChangepinService } from '../../services/changepin.service';

@Component({
  selector: 'app-changepin',
  templateUrl: './changepin.component.html',
  styleUrls: ['./changepin.component.css']
})
export class ChangepinComponent implements OnInit {

  oldpassword:FormControl=new FormControl("");
  newpassword:FormControl=new FormControl("");
  confirmnewpassword:FormControl=new FormControl("");

  constructor(private changepin:ChangepinService) { }

  adds! :Ichange[];

  
  ngOnInit(): void {

    this.changepin.getAllData().subscribe((data:Ichange[]) =>{
      console.log(data);
      this.adds=data;
    })
  }

  changePin(){
    let newpin:Ichange={
     oldpassword:this.oldpassword.value,
     newpassword:this.oldpassword.value,
     confirmnewpassword:this.confirmnewpassword.value
    }
    this.changepin.changePin(newpin);
    console.log(newpin);
  }

}
