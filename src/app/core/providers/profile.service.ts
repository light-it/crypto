import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { SessionService } from './session.service';
import { User } from '../models/User.model';



@Injectable()
export class ProfileService {
  public profileSource: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {

    if (SessionService.userInfo) {
      this.profileSource.next(new User(SessionService.userInfo));
    }
  }

  public get profileSource$(): Observable<any> {
    return this.profileSource.asObservable();
  }



}
