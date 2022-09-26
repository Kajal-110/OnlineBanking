import { Component, Inject, OnInit } from '@angular/core';
import { ICreate } from '../../interface/icreate';
import { CreateServiceService } from '../../services/create-service.service';
@Inject (CreateServiceService)

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  adds! :ICreate[];

  constructor(private createServices:CreateServiceService) { }

  ngOnInit(): void {
    this.createServices.getAllUser().subscribe((data:ICreate[]) =>{
      console.log(data);
      this.adds=data;
    })
    
    
  }

}
