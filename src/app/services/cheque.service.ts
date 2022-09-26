import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICheque} from '../interface/icheque';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {

  constructor(private http:HttpClient) { }

  addCheque(details:ICheque){
    let url="https://localhost:44325/api/CheckBooks"
     this.http.post(url,details)
    .subscribe(result=>console.log("Data Send to Database"));
  }
}
