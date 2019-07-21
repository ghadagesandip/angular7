import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }


  public getCategories() {
    return this.http.get(`${environment.apiUrl}categories`);
  }
}
