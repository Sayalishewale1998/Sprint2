import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/Stock';
import { StockService } from '../services/stock.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private _stockservice:StockService,public httpc:HttpClient) { }
  StockDetail: Stock = new Stock();
  StockDetails: Array<Stock> = new Array<Stock>();
  ngOnInit(): void {
    this._stockservice.getStocks().subscribe(res => this.StockDetails = res, err => console.log(err))
}
}