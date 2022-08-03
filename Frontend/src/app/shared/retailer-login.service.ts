import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RetInfo } from './model/retailer.model';
import { LoginInfo } from './model/Ret-log.model';

@Injectable({
  providedIn: 'root',
})
export class RetailerLoginService {
  userinfo!: RetInfo;
  loginfo!: LoginInfo;
  constructor(private http: HttpClient) {}

  login(login: LoginInfo): Observable<RetInfo> {
    let url = 'http://localhost:8065/loginRetailer';
    return this.http.post<RetInfo>(url, login);
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
}
