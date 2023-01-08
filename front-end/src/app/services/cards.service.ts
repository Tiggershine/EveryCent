import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';

const cardUrl = 'http://localhost:3000/card';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this._http.get<Product[]>('http://localhost:3000/card/cards');
  }
  getProduct(_id: string): Observable<object> {
    return this._http.get(`http://localhost:3000/card/card/${_id}`);
  }
  create(data: any): Observable<Product> {
    return this._http.post<Product>(
      'http://localhost:3000/card/register',
      data
    );
  }
  update(id: any, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/card/update/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this._http.delete(`http://localhost:3000/card/delete/${id}`);
  }
  searchByTitle(searchText: string): Observable<Product[]> {
    return this.getAll().pipe(
      map((data) => {
        if (!searchText) return data;
        return data.filter((product) => {
          const query = searchText.toLowerCase();
          return (
            product.title.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
          );
        });
      })
    );
  }
}
