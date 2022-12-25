import { Injectable } from '@angular/core';
import { PRODUCTS } from '../../models/mock-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  
  getProducts() { return PRODUCTS; }
}
