import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private _shareUrl = "https://localhost:44386/api/Stock/get";
  constructor(private http: HttpClient, private _router: Router) { }


  getStocks() {
    return this.http.get<any>(this._shareUrl);
  }
}