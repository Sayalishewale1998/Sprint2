import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BuyService {
  private _buyUrl = "https://localhost:44319/api/Stock/get";
  public stockItemList: any = []
  public shareList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor(private http: HttpClient, private _router: Router) { }
  additem(item: any) {
    return this.http.post<any>(this._buyUrl, item);
  }
  AddShare(stock: any) {
    this.stockItemList.push(stock);
    this.shareList.next(this.stockItemList);
    this.getTotalPrice();
  }
  getShares() {
    return this.shareList.asObservable();
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.stockItemList.map((a: any) => {
      grandTotal += a.productFinal;
    })
    return grandTotal;
  }
}