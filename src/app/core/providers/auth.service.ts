import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SessionService } from './session.service';
import { ILogin } from '../../auth/shared/login-model';

@Injectable()
export class AuthService {

  private email = 'admin@admin';
  private password = '12345';

  constructor() {
  }

  /**
   * check does user exist
   * @returns user
   */
  public isLogin() {
    return !!(SessionService.token);
  }


  public signIn(data: ILogin): Observable<boolean> {
    return of(this.checkPermissions(data));
  }
  private checkPermissions(data: ILogin): boolean {
    return !!(data.email === this.email && data.password && this.password);
  }

  /**
   * for subscription, is user autorized
   */
  public get isListenAuthorization$(): Observable<any> {
    return this.loginSource.asObservable();
  }

  /**
   * For remove data user from session (token and localStorage)
   */
  public logout() {
    // return this.http.post(ConfigService.logoutPath, '')
    //   .pipe(
    //     map((res) => {
    //       if (!this.isSecurity) {
    //         this.socketService.disconnect();
    //       }
    //       SessionService.clearStorage();
    //       this.cookieService.clearCookies();
    //       this.loginSource.next(false);
    //
    //       return res;
    //     })
    //   );
  }


}
