import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../shared/model/category.model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  baseUrl = 'http://localhost:8065';
  constructor(private http: HttpClient) {}

  public addProduct(product: any) {
    return this.http.post(`${baseUrl}/createNewProduct/`, product);
  }
}
