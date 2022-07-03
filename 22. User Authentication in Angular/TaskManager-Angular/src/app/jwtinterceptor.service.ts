import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtinterceptorService implements HttpInterceptor {

  constructor() { }

  // req represents current rquest that is being sent
  // <any> represensts response type

  // next represents - next intercepter in case of multiple interceptor
  // return type is observable 
  // Observable is a series of httpEvents such as http header response, http progress event ,etc
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = {token : ''}
    if (sessionStorage['currentUser'] != null) {
      currentUser = JSON.parse(sessionStorage['currentUser']);
    }

    // request duplicated
    req = req.clone({
      setHeaders : {
        Authorization : "Bearer " + currentUser.token
      }
    });
    return next.handle(req);
  }
}
