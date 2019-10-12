import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public setUser(data) {
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('first_name', data.user.first_name);
    localStorage.setItem('token', data.token);
  }

  public logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  public isAdmin(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
        const userData = JSON.parse(user);
        return userData.userRole === 'admin' ? true : false;
    }
  }
}
