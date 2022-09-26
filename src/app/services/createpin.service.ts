import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreatepin } from '../interface/icreatepin';

@Injectable({
  providedIn: 'root'
})
export class CreatepinService {

  constructor( private http:HttpClient) { }

  createPin(createcard:ICreatepin){
    let url="https://localhost:44325/api/CreatePasswords"
     this.http.post(url,createcard)
    .subscribe(result=>console.log("Data Send to Database"));
    console.log(alert("Hello User,  Your Pin has Generated succesfully !!!"))
  }
}
