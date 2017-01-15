import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthenticationService {
  public loggedInStatus: Subject<boolean> = new BehaviorSubject<boolean>(null);
  private isLoggedIn: boolean;

  constructor() { }

  logIn(username: string, password: string) {
    if (username === 'admin' && password === 'admin'){
      this.isLoggedIn = true;
      this.notifyLoginChange();
    }
  }

  logOut() {
    this.isLoggedIn = false;
    this.notifyLoginChange();
  }

  private notifyLoginChange() {
    this.loggedInStatus.next(this.isLoggedIn);
  }
}
