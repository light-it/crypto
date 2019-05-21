import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../../../core/providers/auth.service';
import { SessionService } from '../../../core/providers/session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  public canActivate(): boolean {
    if (!SessionService.userInfo) {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }
}

