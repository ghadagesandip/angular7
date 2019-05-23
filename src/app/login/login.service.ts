import { Injectable } from '@angular/core';
import { Login } from './login.types';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  public login(userInfo: Login) {
    localStorage.setItem('ACCESS_TOKEN', 'access_tooken');
  }

  public isLoggedIn() {
      return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
      return localStorage.removeItem('ACCESS_TOKEN');
  }
}
