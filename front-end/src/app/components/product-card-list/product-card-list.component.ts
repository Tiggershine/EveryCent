import { Component, HostListener, Input, OnInit } from '@angular/core';
import { PRODUCTS } from '../../models/mock-product';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss']
})
export class ProductCardListComponent implements OnInit {

  @Input() searchText: string;
  products = PRODUCTS;
  searchhidden: boolean = true;
  isMypost: boolean= true;
    
  constructor () {
  }
  
  @HostListener('window:scroll', ['$event']) onscroll() {
    if(window.scrollY > 250) { // 650으로 바까라
      this.searchhidden = false;
    } else {
      this.searchhidden = true;
    }
  }

  ngOnInit() {
  }
}
