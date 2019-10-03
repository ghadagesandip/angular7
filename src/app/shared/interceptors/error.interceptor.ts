import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor( private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request)
        .pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    console.log('err');
                    // client-side error
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    // server-side error
                    console.log('err 1');
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                }
                 // haandles 401 authentication error
                if (error.status) {
                    localStorage.clear();
                    this.router.navigate(['/'], { queryParams: { showLogin: true } });
                }
                // window.alert(errorMessage);
                return throwError(errorMessage);
            })
        );
    }
}
