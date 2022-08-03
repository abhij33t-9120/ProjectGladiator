import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ret_detail } from '../shared/model/retailer-details.model';

@Injectable({
  providedIn: 'root',
})
export class RetailerDetailsService {
  baseUrl = 'http://localhost:8065';
  constructor(private http: HttpClient) {}

  RetailerList: ret_detail[] = [];

  getRetailerDetails(id: number): Observable<ret_detail> {
    return this.http.get<ret_detail>(`${this.baseUrl}/getRetailer/${id}`);
  }

  getProducts(): Observable<ret_detail[]> {
    return this.http.get<ret_detail[]>(`${this.baseUrl}/getRetailer`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/Deleteretailer/${id}`);
  }

  delete1(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deleteRetailer/${id}`);
  }
}
