import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('request intercept===========', request);
    if (request.method == 'POST') {
      const requestColone = request.clone({
        headers: new HttpHeaders({ token: 'dfdf4545' }),
      });

      return next.handle(requestColone);
    }

    return next.handle(request);
  }
}
