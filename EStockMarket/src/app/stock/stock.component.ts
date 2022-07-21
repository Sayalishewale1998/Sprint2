import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CompanyDetails } from '../models/CompanyDetails';
import { Stock } from '../models/Stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(public httpc:HttpClient) { }
  StockDetail: Stock = new Stock();
  StockDetails: Array<Stock> = new Array<Stock>();
  

  ngOnInit(): void {
  }
  AddStock() 
  {
    console.log(this.StockDetail);
    var stockdto={
      companyCode:this.StockDetail.companyCode,
      companyName:this.StockDetail.companyName,
      startDate:this.StockDetail.startDate, 
      endDate:this.StockDetail.endDate,     
      stockPrice:this.StockDetail.stockPrice,
      stockQuantity:this.StockDetail.stockQuantity,          
    }
  
      this.httpc.post("https://localhost:44319/api/Stock",stockdto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
      this.StockDetail = new Stock();
  }
  PostSuccess(res:any){
    console.log(res);
  }
  PostError(res:any){
    console.log(res);
  }


  getData(){
    console.log("Hi");
    this.httpc.get("https://localhost:44319/api/Stock").subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  GetSuccess(input:any){
    this.StockDetails=input;
  }
  GetError(input:any){
    console.log(input);
  }
}