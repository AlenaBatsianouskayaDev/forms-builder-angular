import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { IRequestData, IAccessData } from './../reducers/reducers.interfaces';

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:5000/api/registration";
  private _loginUrl = "http://localhost:5000/api/login";
  
  constructor( private _http: HttpClient,  private _router: Router) { }

  registerUser(user: IRequestData) {
    return this._http.post<IAccessData>(this._registerUrl, user)
  }

  loginUser(user: IRequestData) {
    return this._http.post<IAccessData>(this._loginUrl, user)
  }

  onLoggedIn(token: string) {
    localStorage.setItem('token', token);
    this._router.navigate(['/form-builder']);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }
   
  isLoggedIn() {
    return !!localStorage.getItem('token'); 
  }

  getToken() {
    return localStorage.getItem('token');
  }
}