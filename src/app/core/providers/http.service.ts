import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SessionService } from './session.service';
import { ConfigService } from './config.service';
import { GroupsService } from './groups.service';
import { CookieStorageService } from './cookie-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieStorageService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = `Token ${SessionService.token}`;
    // Clone the request to add the new header.
    // add check for admin permission
    if (SessionService.token && this.needRemoveToken(req)) {
     //  const authReq = req.clone({headers: req.headers.set('X-Token-Authorization', authHeader)});
      const authReq = req.clone({
        setHeaders: {
          'Authorization': authHeader,
          'X-Token-Authorization': authHeader,
          'Access-Control-Allow-Origin': '*',
        }
      });

      return next.handle(authReq).pipe(tap(null,  this.handle401.bind(this)));
    } else {
      return next.handle(req).pipe(tap(null,  this.handle401.bind(this)));
    }
  }

  private handle401(err: any) {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
         SessionService.userInfo = null;
         this.cookieService.permissions = null;
      }
    }
  }

  private needRemoveToken(req) {
    return !(((req.method === 'POST' && req.url === ConfigService.trustboxPath)
      || (req.method === 'GET' && !!req.url.match(ConfigService.trustboxChatPath))
      || (req.method === 'GET' && !!req.url.match(ConfigService.trustboxIdentifierPath)))
      && !GroupsService.checkGroup([GroupsService.PERMISSION_GROUPS.READ_TRUST_BOX]));
  }

}
