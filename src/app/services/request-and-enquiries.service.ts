import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRequestAndEnquiries } from '../interface/request-and-enquiries';
@Injectable({
  providedIn: 'root'
})
export class RequestAndEnquiriesService {

  constructor(private http:HttpClient) { }

  addCustomerMessage(create:IRequestAndEnquiries){
    let url="https://localhost:44325/api/Requests"
     this.http.post(url,create)
    .subscribe(result=>console.log("Data Send to Database"));
  }  
 
}
