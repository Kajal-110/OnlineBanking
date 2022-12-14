import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/services/authservices.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private loginAuth:AuthservicesService, private router:Router) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email :new FormControl('',[Validators.required, Validators.email]),
    pwd:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)
    ]),
  });

  isUserValid: boolean = false;

  loginSubmited(){
    this.loginAuth.loginUser([this.loginForm.value.email, this.loginForm.value.pwd])
    .subscribe(res => {
    if (res == 'Failure'){
      this.isUserValid = false;
      alert('Login Unsuccessfull');
    } else{
      this.isUserValid = true;
      alert('Login Successfull');
      // this.loginAuth.setToken(res);
      this.router.navigateByUrl('home');
    }
    });
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get pwd(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }

}
