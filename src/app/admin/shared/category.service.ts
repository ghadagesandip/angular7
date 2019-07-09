import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }


  public getCategories() {
    let headers = new HttpHeaders();
    headers = headers.append('authorization', JSON.parse(localStorage.getItem('token')));
    return this.http.get(`${environment.apiUrl}categories`, {headers});
  }
}
