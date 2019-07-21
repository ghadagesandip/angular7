import { Injectable } from '@angular/core';
import { LoginRequest } from './login.types';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';

// https://www.truecodex.com/course/angular-project-training/login-and-logout-using-web-api-with-token-based-authentication-angular
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  errorData: {};

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public login(userInfo: LoginRequest) {
    return this.http.post<any>(`${environment.apiUrl}auth/login`, userInfo).pipe(
      map(response => {
        if (response && response.data.token) {
          localStorage.setItem('currentUser', JSON.stringify(response.data.user));
          localStorage.setItem('token', response.data.token);
        }
      }),
      catchError(this.handleError)
    );
  }

  public isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  public logout() {
    localStorage.removeItem('currentUser');
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.token;
  }

  private handleError(error: HttpErrorResponse) {
    console.log('error', error);
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: error.error.message,
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
