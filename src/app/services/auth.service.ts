import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { IRequestData, IAccessData } from './../reducers/reducers.interfaces';

@Injectable()
export class AuthService {

  private API_URL = environment.API_URL;
  
  constructor( private _http: HttpClient,  private _router: Router) { }

  public registerUser(user: IRequestData): Observable<IAccessData> {
    return this._http.post<IAccessData>(`${this.API_URL}/registration`, user)
  }

  public loginUser(user: IRequestData): Observable<IAccessData> {
    return this._http.post<IAccessData>(`${this.API_URL}/login`, user)
  }

  public onLoggedIn(token: string): void {
    localStorage.setItem('token', token);
    this._router.navigate(['/form-builder']);
  }

  public onLoggedOut(): void {
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }
   
  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); 
  }

  public getToken(): string | null{
    return localStorage.getItem('token');
  }
}
