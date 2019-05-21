import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../providers/auth.service';
import { SessionService } from '../providers/session.service';
import { CookieStorageService } from '../providers/cookie-storage.service';
import { GroupsService } from '../providers/groups.service';
import { tap } from 'rxjs/internal/operators/tap';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private cookieService: CookieStorageService,
              private router: Router) {
  }

  /**
   * Used for protection pages
   * @param next - current route
   * @param state - route state
   * @returns permission
   */
  public canActivate(next: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const isClear = !!next.queryParams.clear || false;
    const isLoginPage = state.url.indexOf('login') !== -1;
    const isEditProfilePage = state.url.indexOf('edit-profile') !== -1;

    if (isClear) {
      return this.authService.logout()
        .pipe(
          tap(() => {
            this.router.navigate([], {queryParams: {}});
          }),
          switchMap(() => of(true))
        );
    }


    if (!this.authService.isLogin()) {
      if (isLoginPage) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      if (!isEditProfilePage && GroupsService.checkApprovedStatus()) {
        this.router.navigate(['/edit-profile']);
        return false;
      } else if (isLoginPage) {
        this.router.navigate(['']);
        return false;
      } else {
        return true;
      }
    }
  }
}
