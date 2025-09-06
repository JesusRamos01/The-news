import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.includes('newsapi.org')) {
      const clonedRequest = req.clone({
        setHeaders: {
          'X-Api-Key': environment.apiKey   // NewsAPI acepta el token en headers
        }
      });

      return next.handle(clonedRequest);
}
return next.handle(req);
  }
}
