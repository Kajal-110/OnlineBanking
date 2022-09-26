import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IRequestAndEnquiries } from '../../interface/request-and-enquiries';
import { RequestAndEnquiriesService } from '../../services/request-and-enquiries.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  name:FormControl=new FormControl("");
  email:FormControl=new FormControl("");
  message:FormControl=new FormControl("");

  constructor(private request:RequestAndEnquiriesService) { }

  ngOnInit(): void {
  }

  saveMassage(){
    let requestAndEnquiries:IRequestAndEnquiries={
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    }
    this.request.addCustomerMessage(requestAndEnquiries);
    console.log(requestAndEnquiries);
  }




}
