import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss']
})
export class ProductCardListComponent implements OnInit {

  @Input() searchText: string = '';
  @Input() searched: boolean;
  products: Product[];
  isMypost: boolean= false;
    
  constructor (
    private _cardservice: CardsService,
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit() {
    this._cardservice.getAll().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
      error: (e) => console.log(e)
    });
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this._cardservice.searchByTitle(this.searchText).subscribe(res => {
      this.products = res;
    });
  }
}
