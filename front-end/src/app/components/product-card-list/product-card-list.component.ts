import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CardsService } from 'src/app/services/cards.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss']
})
export class ProductCardListComponent implements OnInit {

  @Input() searchText: string;
  @Input() searched: boolean;
  products: Product[];
  product: Product;
  isMypost: boolean = false;
  currentRoute: any;
  
  constructor (
    private _cardservice: CardsService,
    private _authservice: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentRoute = event;
    });
  }
  // todo: username -> userid
  private writer: string = this._authservice.getUsername();

  ngOnInit() {
    if(this.currentRoute.url === "/mypage" && this.writer !== null) {
      this._cardservice.findByUser(this.writer).subscribe({
        next: (data) => {
          this.products = data;
          this.isMypost = true;
        },
        error: (e) => console.log(e)
      });
    } else {
      this.retrieveProducts();
    }
  }
  
  retrieveProducts() {
    this._cardservice.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => console.log(e)
    });
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this._cardservice.searchByTitle(this.searchText).subscribe(res => {
      this.products = res;
    });
  }
}
