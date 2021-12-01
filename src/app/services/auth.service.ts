import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:5000/api/registration"
  constructor(private http: HttpClient) {
    
  }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user)
  }
}