import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminLoginService {
  constructor() {}

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('Role');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  public gaurdLoggedIn() {
    let tokenStr = localStorage.getItem('email');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // logout : remove token from local storage
  public logout() {
    console.log('hello');
    localStorage.clear();
  }

  public click() {
    alert('hello');
  }
}
