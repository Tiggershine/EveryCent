import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-after-search',
  templateUrl: './after-search.component.html',
  styleUrls: ['./after-search.component.scss']
})
export class AfterSearchComponent implements OnInit {

  @Input() receivedTitle: string;
  products: Product[];

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    console.log(this.receivedTitle);
    this.cardsService.findByTitle(this.receivedTitle).subscribe({
      next: (data) => { 
        this.products = data; 
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
