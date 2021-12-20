import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

import { IRequestData, IAccessData } from './../reducers/reducers.interfaces';

@Injectable()
export class AuthService {

  private API_URL = environment.API_URL;
  
  constructor( private _http: HttpClient,  private _router: Router) { }

  registerUser(user: IRequestData) {
    return this._http.post<IAccessData>(`${this.API_URL}/registration`, user)
  }

  loginUser(user: IRequestData) {
    return this._http.post<IAccessData>(`${this.API_URL}/login`, user)
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