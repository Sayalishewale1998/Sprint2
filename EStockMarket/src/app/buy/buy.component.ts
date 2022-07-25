import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyService } from '../services/buy.service';
import { Stock } from '../models/Stock';
import { buyer } from '../models/buyer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  public StockDetails : any = [];
  public grandTotal !: number;
  constructor(private buyService : BuyService,private _router:Router,public httpc:HttpClient) { }
  StockDetail: Stock = new Stock();
  Buyer:buyer=new buyer();
  Buyers:Array<buyer> = new Array<buyer>();
  ngOnInit(): void {
    this.buyService.getShares()
    .subscribe(res=>{
      this.StockDetails = res;
      this.grandTotal = this.buyService.getTotalPrice();
    })
  }
  AddShare() {
    console.log(this.Buyer);
    var item = {
      companyName: this.StockDetail.companyName,
      stockPrice: Number(this.StockDetail.stockPrice),
      stockQuantity: Number(this.StockDetail.stockQuantity),
     
  
    }

    this.httpc.post("https://localhost:44319/api/Stock", item).subscribe(res => this.PostSuccess(res), res => this.PostError(res));
    this.Buyer = new buyer();
  }
  PostSuccess(res: any) {
    console.log(res);
  }
  PostError(res: any) {
    console.log(res);
  }
}