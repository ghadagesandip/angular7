import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  public getProductCategories() {
    return this.http.get(`${environment.apiUrl}categories/dashboard-products`);
  }
}
