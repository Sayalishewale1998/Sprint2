import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CompanyDetails } from '../models/CompanyDetails';
import { Stock } from '../models/Stock';
import { CompanydService } from '../services/companyd.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {

  constructor(private _companydervice:CompanydService,public httpc:HttpClient,private _stockservice:StockService) { }
  companyDetail: CompanyDetails = new CompanyDetails();
  companyDetails: Array<CompanyDetails> = new Array<CompanyDetails>();
  StockDetail: Stock = new Stock();
  StockDetails: Array<Stock> = new Array<Stock>();
  ngOnInit(): void {
    this._companydervice.getCompanuys().subscribe(res => this.companyDetails = res, err => console.log(err))
    this._stockservice.getStocks().subscribe(res => this.StockDetails = res, err => console.log(err))
   
  }

}