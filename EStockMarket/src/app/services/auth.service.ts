import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient, HttpErrorResponse} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "https://localhost:44319/api/Login/register";
  private _loginUrl = "https://localhost:44319/api/Login/login";
  constructor(private http: HttpClient, private _router: Router) { }
  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }
  
}
