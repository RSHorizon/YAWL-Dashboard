import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SessionService} from "./session.service";


@Injectable()
export class SessionAuthInterceptor implements HttpInterceptor {
  constructor(private sessionService: SessionService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available

    if(this.sessionService.isLoggedIn()){
      request = request.clone({
        setHeaders: {
          Authorization: `Basic` + btoa(unescape(encodeURIComponent('admin' + ':' + 'YAWL')))
        }
      });
    }

    /*const currentUser = this.sessionService.currentUserValue;
    if (currentUser && currentUser.authdata) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${currentUser.authdata}`
        }
      });
    }*/

    return next.handle(request);
  }
}
