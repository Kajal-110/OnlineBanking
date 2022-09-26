import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ichange } from '../interface/ichange';


@Injectable({
  providedIn: 'root'
})
export class ChangepinService {

 
  constructor( private http:HttpClient) { }
  changePin(changepin:Ichange){
    let url="https://localhost:44325/api/ChangePins"
     this.http.post(url,changepin)
    .subscribe(result=>console.log("Data Send to Database"));
    console.log(alert("Hello User,  Your Pin has changed succesfully !!!"))
  }

  getAllData():Observable<Ichange[]>{
    let url ="https://localhost:44325/api/ChangePins";
      console.log("Done")
     return this.http.get<Ichange[]>(url);

  }
  
}
