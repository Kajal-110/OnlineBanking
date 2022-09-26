import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICreate } from '../interface/icreate';
import { IAmount } from '../interface/iamount';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateServiceService {

constructor(private http:HttpClient,private route:Router) { }


 createDetail(data:ICreate){
  this.http.post<ICreate[]>("https://localhost:44325/api/CreateAccounts",data,{
    headers:{
      "Access-Control-Allow-Origin":"*"
    }
   }).subscribe(result=>console.log("Data send to Database"));
  }

  // createFirsttimedeposite(amounts:IAmount){
  //   this.http.post<IAmount>("https://localhost:44325/api/CreateAccounts/" + amounts.AccountHolderName,amounts,{
  //     headers:{
  //       "Access-Control-Allow-Origin":"*"
  //     }
  //   }).subscribe(result=> console.log("Done"));
  //  }
  
  transfer(amounts:IAmount){
    this.http.post<IAmount>("https://localhost:44325/api/Transferamounts" ,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=> console.log("done"));
   }


  getAllUser():Observable<ICreate[]>{
    let url ="https://localhost:44325/api/CreateAccounts";
      console.log("Done")
     return this.http.get<ICreate[]>(url)
  }
  
}
  
