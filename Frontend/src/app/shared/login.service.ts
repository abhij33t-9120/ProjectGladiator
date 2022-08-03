import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfo } from '../shared/model/login.model';
import { Observable, Subject } from 'rxjs';
import baseUrl from './helper';
import { UserInfo } from '../shared/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();
  login1!: LoginInfo;
  userinfo!: UserInfo;
  constructor(private http: HttpClient) {}

  login(login: LoginInfo): Observable<UserInfo> {
    let url = 'http://localhost:8065/login';
    return this.http.post<UserInfo>(url, login);
  }
  //isLogin: user is logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('user_id');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // logout : remove token from local storage
  public logout() {
    window.location.reload();
    localStorage.clear();
  }

  //get token
  public getToken() {
    return localStorage.getItem('token');
  }

  //set userDetail
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //getUser
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //get user role

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
