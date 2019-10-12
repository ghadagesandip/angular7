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

    public getCustomers(page, limit) {
        return this.http.get(`${environment.apiUrl}users?page=${page + 1}&limit=${limit}`);
    }

    public getProducts(page, category, brand) {
        return this.http.get(`${environment.apiUrl}products?page=${page + 1}&category=${category}&brand=${brand}`);
    }

    public getProduct(id: string) {
        return this.http.get(`${environment.apiUrl}products/${id}/details`);
    }

    public addProduct(product: any) {
        return this.http.post(`${environment.apiUrl}products`, product);
    }

    public editProduct(id, data) {
        return this.http.put(`${environment.apiUrl}products/${id}`, data);
    }

    public getCateogies() {
        return this.http.get(`${environment.apiUrl}categories`);
    }

    public getBrands(categoryId) {
        return this.http.get(`${environment.apiUrl}brands?category_id=${categoryId}`);
    }

    public deleteRecord(id, path) {
        return this.http.delete(`${environment.apiUrl}${path}/${id}`);
    }
}
