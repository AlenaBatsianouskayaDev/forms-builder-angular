import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:5000/api/registration"
  private _loginUrl = "http://localhost:5000/api/login"

  constructor(private _http: HttpClient, private _router: Router) {
    
  }

  registerUser(user: any) {
    return this._http.post<any>(this._registerUrl, user)
  }

  loginUser(user: any) {
    return this._http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token'); /// посмотреть куда их перенести
  }

  getToken() {
    return localStorage.getItem('token'); /// посмотреть куда их перенести
  }
}