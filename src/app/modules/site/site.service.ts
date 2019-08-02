import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { LoginForm } from './component/login-dialog/login';

@Injectable()
export class SiteService {

  constructor(
    private http: HttpClient
  ) { }

  public getHomeProducts() {
    return this.http.get(`${environment.apiUrl}categories/dashboard-products`);
  }

  public getBrandList(categoryId: string) {
    return this.http.get(`${environment.apiUrl}categories/${categoryId}/brand-count`);
  }

  public getCategoryWiseProducts(id: string, brand: string) {
    brand = brand ? brand : '';
    return this.http.get(`${environment.apiUrl}products/byCategoryId/${id}?limit=10&brand=${brand}`);
  }

  public login(loginData: LoginForm) {
    return this.http.post<LoginForm>(`${environment.apiUrl}auth/login`, loginData);
  }
}
