import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable()
export class SiteService {

  constructor(
    private http: HttpClient
  ) { }

  public getHomeProducts() {
    return this.http.get(`${environment.apiUrl}categories/dashboard-products`);
  }


  public getCategoryWiseProducts(id: string) {
     return this.http.get(`${environment.apiUrl}products/byCategoryId/${id}?limit=100`);
     // above can be written as below
    // return this.http.get(environment.apiUrl + 'products/' + id + '/details');
  }

}
