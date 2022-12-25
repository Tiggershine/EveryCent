import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const cardsUrl = 'http://localhost:3000/cards';
const cardUrl = 'http://localhost:3000/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private _http: HttpClient) { }
  
  getAll(): Observable<Product[]> {
    return this._http.get<Product[]>(cardsUrl);
  }
  create(data: any): Observable<any> {
    return this._http.post(cardUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this._http.put(`${cardUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this._http.delete(`${cardUrl}/${id}`);
  }
  findByTitle(title: string): Observable<Product[]> {
    return this._http.get<Product[]>(`${cardsUrl}? title=${title}`);
  }
}
