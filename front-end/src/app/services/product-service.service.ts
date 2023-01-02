import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { PRODUCT_CARD_REGISTER } from '../models/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  create(data: any): Observable<Product> {
    return this.http.post<Product>(PRODUCT_CARD_REGISTER, data);
  }
}
