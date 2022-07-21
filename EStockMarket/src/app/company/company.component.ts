import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CompanyDetails } from '../models/CompanyDetails';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(public httpc:HttpClient) { }
  CompanyD: CompanyDetails = new CompanyDetails();
  Companys: Array<CompanyDetails> = new Array<CompanyDetails>();
  AddCompany() 
  {
    console.log(this.CompanyD);
    var cmpdto={
      companyCode:this.CompanyD.companyCode,
      companyPassword:this.CompanyD.companyPassword,
      companyName:this.CompanyD.companyName,
      companyCeo:this.CompanyD.companyCeo,
      companyTurnover:Number(this.CompanyD.companyTurnover),
      companyWebsite:this.CompanyD.companyWebsite,               
      stockExchange:this.CompanyD.stockExchange,
      companyEmail:this.CompanyD.companyEmail,
    }
  
      this.httpc.post("https://localhost:44319/api/Company",cmpdto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
      this.CompanyD = new CompanyDetails();
  }
  PostSuccess(res:any){
    console.log(res);
  }
  PostError(res:any){
    console.log(res);
  }
  ngOnInit(): void {
  }
  DeleteCompany(input: CompanyDetails) {
    var del = this.Companys.indexOf(input);
    this.Companys.splice(del,1);
  }
}