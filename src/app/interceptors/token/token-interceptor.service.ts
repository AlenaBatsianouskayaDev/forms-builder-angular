import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector ) { }

  // TODO: разобраться с типизацией в аргументах ниже
  intercept(req: any, next: any) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer '${authService.getToken()}'`}
    })
    return next.handle(tokenizedReq)
  }
}