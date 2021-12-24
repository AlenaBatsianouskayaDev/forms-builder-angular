import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { AuthService } from './../../services/auth.service';
import { IRequestData } from './../../reducers/reducers.interfaces';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector ) { }

  public intercept(req: HttpRequest<IRequestData>, next: HttpHandler): Observable<any> {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer '${authService.getToken()}'`,
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    return next.handle(tokenizedReq)
  }
}
