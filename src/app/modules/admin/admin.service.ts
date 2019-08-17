import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AdminService {

    constructor(
        private http: HttpClient
    ) {}

    public logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('first_name');
    }

    public getCustomers(page) {
        return this.http.get(`${environment.apiUrl}users?page=${page + 1}`);
    }
}
