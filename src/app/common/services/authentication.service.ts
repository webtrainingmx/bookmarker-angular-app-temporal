import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SessionStorageService} from 'ngx-webstorage';

@Injectable()
export class AuthenticationService {
  apiAuthBaseURL = 'http://projects-api.webtraining.zone';
  user;
  hasSession = false;

  constructor(public http: HttpClient, public locker: SessionStorageService) {

  }

  public isLoggedIn() {
    const user = this.locker.retrieve('user');
    if (!!user) {
      this.user = user;
      this.hasSession = true;
    }
    return this.hasSession;
  }

  public logIn(username: string, password: string) {
    // http://projects-api.webtraining.zone/users/login
    const url = `${this.apiAuthBaseURL}/users/login`;

    return this.http.post(url, {
      username: username,
      password: password
    });
  }

  public logout() {
    this.user = null;
    this.hasSession = false;
    this.locker.clear('user');
  }

}
