import { Component, OnInit } from '@angular/core';
import { UserdataserviceService } from 'src/app/services/userdataservice.service';
import { ICreate } from 'src/app/interface/icreate';
import { CreateServiceService } from 'src/app/services/create-service.service';



@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  constructor(private createServices:CreateServiceService) { }
 
  adds! :ICreate[];
  ngOnInit(): void {
    this.createServices.getAllUser().subscribe((data:ICreate[]) =>{
          console.log(data);
          this.adds=data;
    })

    // let users: any[] = [{ "id": 1, "name": "Anil Singh", "date": "2019-06-01" },
    // { "id": 2, "name": "Sunil", "date": "2019-08-07" },
    // { "id": 3, "name": "Aradhya", "date": "2019-11-22" }];


  // let startDate = new Date("01-02-2019");
  // let endDate = new Date("31-10-2019");

  //   Submit(){
  //   let adds = this.adds.filter(f => new Date(f. dateofbirth) > startDate && new Date(f. dateofbirth) < endDate);
  //   console.log(adds);
  //   }
  }
  searchdata() {  
    // debugger;  
    //  this.searchdataService.searhhdata(this.model).subscribe((res: any) => {  
             
    //      this.emp=res;   
    //      console.log(this.emp);   
     //})
  }


 
 
} 
  
 
    
 

