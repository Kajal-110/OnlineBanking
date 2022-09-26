import { Component, OnInit } from '@angular/core';
import { ICreate } from 'src/app/interface/icreate';
import { CreateServiceService } from 'src/app/services/create-service.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  
  adds! :ICreate[];

  constructor(private createServices:CreateServiceService) { }

  ngOnInit(): void {
    this.createServices.getAllUser().subscribe((data:ICreate[]) =>{
      console.log(data);
      this.adds=data;
    })
    
    
  }

}
