import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SessionService } from './session.service';
import { ILogin } from '../../auth/shared/login-model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private email = 'admin@admin';
  private password = '12345';

  constructor(private router: Router) {
  }

  public isLogin() {
    return !!(SessionService.userInfo);
  }

  public signIn(data: ILogin): Observable<boolean> {
    return of(this.checkPermissions(data))
      .pipe(tap((res) => {
        if (res) {
          SessionService.userInfo = data;
        }
      }));
  }

  public logout(): void {
    SessionService.clearStorage();
    this.router.navigate(['login']);
  }

  private checkPermissions(data: ILogin): boolean {
    return !!(data.email === this.email && data.password && this.password);
  }


}
