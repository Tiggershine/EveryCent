import { Component, HostListener, Input, OnInit, SimpleChange } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss']
})
export class ProductCardListComponent implements OnInit {

  products: Product[];
  searchhidden: boolean = true;
  isMypost: boolean= true;
  
  constructor (
    private cardsService: CardsService) {}
  
  @HostListener('window:scroll', ['$event']) onscroll() {
    if(window.scrollY > 250) { // 650으로 바까라
      this.searchhidden = false;
    } else {
      this.searchhidden = true;
    }
  }
  
  ngOnInit() {
    this.cardsService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    });
  }
}
