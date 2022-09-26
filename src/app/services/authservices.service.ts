import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  constructor(private http:HttpClient) {}
   
  baseServerUrl="https://localhost:44373/api/Signups/";
  registerUser(register:Array<String>){
    return this.http.post(this.baseServerUrl + 'RegisterUser',
    {
      FirstName: register[0],
      LastName: register[1],
      Email: register[2],
      Mobile: register[3],
      Gender: register[4],
      pwd: register[5],
    },
    {
      responseType:'text',
    }
    );
  }

  loginUser(register:Array<string>){
    return this.http.post(this.baseServerUrl + 'LoginUser',
    {
      Email:register[0],
      pwd:register[1],
    },
    {
      responseType:'text',
    }
    );
  }
}
