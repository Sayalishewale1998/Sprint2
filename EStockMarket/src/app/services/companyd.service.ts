import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CompanydService {
  private _companyUrl = "https://localhost:44319/api/Company/getall";
  constructor(private http: HttpClient, private _router: Router) { }


  getCompanuys() {
    return this.http.get<any>(this._companyUrl);
  }
}