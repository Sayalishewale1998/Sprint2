import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../models/CustomerDetails';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(public httpc:HttpClient) { }
  customer: CustomerDetails = new CustomerDetails();
  customers: Array<CustomerDetails> = new Array<CustomerDetails>();

  ngOnInit(): void {
  }
  AddCustomer() 
  {
    console.log(this.customer);
    var customerdto={
      firstName:this.customer.firstName,
      lastName:this.customer.lastName,
      password:this.customer.password,
      userMailid:this.customer.userMailid,
      phoneNo:Number(this.customer.phoneNo),
      accountDemat:this.customer.accountDemat,                
    }
  
      this.httpc.post("https://localhost:44319/api/Customer",customerdto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
      this.customer = new CustomerDetails();
  }
  PostSuccess(res:any){
    console.log(res);
  }
  PostError(res:any){
    console.log(res);
  }


}
