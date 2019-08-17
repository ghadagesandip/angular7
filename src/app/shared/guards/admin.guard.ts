import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        public router: Router,
    ) {}
    canActivate(): boolean {

        if (this.authService.isAdmin()) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
