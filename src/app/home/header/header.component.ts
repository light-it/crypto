import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/providers/profile.service';
import { User } from '../../core/models/User.model';
import { AuthService } from '../../core/providers/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: User;
  constructor(private profileService: ProfileService,
              private authService: AuthService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.profileService.profileSource$
      .subscribe((user) => {
        this.user = user;
      });
  }

  logOut(): void {
    this.authService.logout();
  }

}
