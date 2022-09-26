import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IDebitCard } from '../interface/idebit-card';

@Injectable({
  providedIn: 'root'
})
export class DebitCardService {

  constructor( private http:HttpClient) { }

  addCard(debitcard:IDebitCard){
    let url="https://localhost:44325/api/DebitCards"
     this.http.post(url,debitcard)
    .subscribe(result=>console.log("Data Send to Database"));
  }

  getAllCards():Observable<IDebitCard[]>{
    let url ="https://localhost:44325/api/DebitCards";
      console.log("Done")
     return this.http.get<IDebitCard[]>(url)

  }
  url="https://localhost:44325/api/DebitCards"
  deleteCard(id:string):Observable<IDebitCard[]>{
    return this.http.delete<IDebitCard[]>(this.url + '/' + id);
  }
}
