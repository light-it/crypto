import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

import { SessionService } from './session.service';
import { ConfigService } from './config.service';

import { User } from '../models/user.model';
import { MentoringUser } from '../models/mentoring-user.model';
import * as download from 'downloadjs';
import { CookieStorageService } from './cookie-storage.service';

@Injectable()
export class ProfileService {
  public profileSource: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private cookieService: CookieStorageService) {

    if (SessionService.userInfo) {
      this.profileSource.next(new User(SessionService.userInfo.user));

      if (!SessionService.permissions) {
       this.cookieService.permissions = SessionService.userInfo.user.permission_groups;
      }
    }

    // SessionService.userInfo consist of user and key
    this.profileSource$.subscribe((data) => {
      if (data) {
        const info = SessionService.userInfo;
        if (info) {
          info.user = data;
        }
        SessionService.userInfo = info;
        this.cookieService.permissions = data.permission_groups;
      }
    });

    if (SessionService.userInfo) {
      this.loadFreshData().subscribe();
    }
  }

  public get profileSource$(): Observable<any> {
    return this.profileSource.asObservable();
  }

  public loadFreshData() {
    return this.http.get(ConfigService.userPath)
      .pipe(
        map((res) => {
          this.profileSource.next(new User(res));
          return new User(res);
        })
      );
  }

  public updateUserData(data, id) {
    return this.http.patch(`${ConfigService.usersPath}${id}/`, data)
      .pipe(
        mergeMap(() => this.loadFreshData())
      );
  }

  public getUser(id) {
    return this.http.get(`${ConfigService.usersPath}${id}/`)
      .pipe(
        map((data) => new User(data))
      );
  }

  public getUserSnapshot() {
    if (SessionService.userInfo) {
      return (new User(SessionService.userInfo.user));
    } else {
      // TODO: try to subscribe here on profileSource$
      console.log('Oops, you need think about it.');
    }
  }

  public getUserMentoring(): Observable<any> {
    return this.http.get(`${ConfigService.userMentoringPath}`, {params: {include: 'proteges,mentor'}})
      .pipe(
        map((res: any) => new MentoringUser(res))
      );
  }

  public downloadIPR() {
    return this.http.get(`${ConfigService.basePathApi}mentoring/download_idp/`, {
      responseType: 'blob',
      observe: 'response'
    })
      .pipe(
        tap((res: any) => {
          download(res.body, 'IPR', 'application/octet-stream');
        })
      );
  }
}
