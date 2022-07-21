import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/Stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _stockservice:StockService,public httpc:HttpClient) { }
  StockDetail: Stock = new Stock();
  StockDetails: Array<Stock> = new Array<Stock>();
  ngOnInit(): void {
    //this._stockservice.getStocks().subscribe(res => this.StockDetails = res, err => console.log(err))
   
  }
  getStock(){
    console.log("Hi");
    this.httpc.get("https://localhost:44319/api/Stock/get").subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  GetSuccess(input:any){
    this.StockDetails=input;
  }
  GetError(input:any){
    console.log(input);
  }
  
}