import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  
  product: Product;
  
  constructor(
    private route: ActivatedRoute,
    private _cardsservice: CardsService) { }

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params['productId']);
  }
  getProduct(_id: string): void {
    this._cardsservice.getProductCard(_id)
    .subscribe({
      next: (data) => {
        this.product = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}

// const routeParams = this.route.snapshot.paramMap;
// const productIdFormRoute = String(routeParams.get('productId'));
// this._cardsservice.getProductCard(productIdFormRoute).subscribe({
//   next: (data) => {
//     this.product = data;
//     console.log(data);
//   },
//   error: (e) => console.error(e)
// });
