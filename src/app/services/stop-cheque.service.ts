import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStopCheque } from '../interface/istop-cheque';

@Injectable({
  providedIn: 'root'
})
export class StopChequeService {

  constructor(private http:HttpClient) { }

  addStopCheque(stop:IStopCheque){
    let url="https://localhost:44325/api/StopCheques"
     this.http.post(url,stop)
    .subscribe(result=>console.log("Data Send to Database"));
  }
}


