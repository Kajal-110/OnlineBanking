import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';  
import { ICreate } from '../interface/icreate';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class UserdataserviceService {


  constructor(private http: HttpClient) { }

  searhhdata(model : any){  
    debugger;    
   return this.http.post<any>('http://localhost:1141/Api/Searchdata/search',model);    
  }  
  showdata(){  
    debugger;    
   return this.http.get<any>('https://localhost:44325/api/CreateAccounts');    
  }  

  getAllUser():Observable<ICreate[]>{
    let url ="https://localhost:44325/api/CreateAccounts";
      console.log("Done")
     return this.http.get<ICreate[]>(url)
  }
}
