import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/Stock';
import { BuyService } from '../services/buy.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
 
  // template: 
  // `<div>
  //   <!--output '26%'-->
  //   <p>A: {{a | percent}}</p>

  //   <!--output '0,134.950%'-->
  //   <p>B: {{b | percent:'4.3-5'}}</p>

  //   <!--output '0 134,950 %'-->
  //   <p>B: {{b | percent:'4.3-5':'fr'}}</p>
  // </div>`
})
export class GetComponent implements OnInit {
  a: number = 0.259;
  b: number = 1.3495;

  constructor(private _stockservice:StockService,public httpc:HttpClient,private buyservice:BuyService) { }
  StockDetail: Stock = new Stock();
  StockDetails: Array<Stock> = new Array<Stock>();
  // numlist: Array<Stock> = new Array<Stock>();
  numlist: Array<number> = [1, 2, 3, 4, 5];
  total: number = 0;
  arrayLength: number = this.numlist.length;
  average: number = 0;

  max: number = 0;
  min: number = 0;

  sum() {
    this.total = this.numlist.reduce((a, b) => a + b);
  }
    ngOnInit(): void {
    this._stockservice.getStocks().subscribe(res => this.StockDetails = res, err => console.log(err))
  
  
  
  }
  AddShare(shares: any) {
    console.log(this.StockDetail);
    this.buyservice.AddShare(shares);

  }
}