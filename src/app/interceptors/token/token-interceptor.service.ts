import { Injectable, Injector } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { AuthService } from './../../services/auth.service';
import { IRequestData } from './../../reducers/reducers.interfaces';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector ) { }

  intercept(req: HttpRequest<IRequestData>, next: HttpHandler) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer '${authService.getToken()}'`}
    })
    return next.handle(tokenizedReq)
  }
}
