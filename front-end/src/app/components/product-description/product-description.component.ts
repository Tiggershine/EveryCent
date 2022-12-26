import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/models/mock-product';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  @Input('productId') productId: string;
  @Input('productTitle') productTitle: string;
  @Input('productCategory') productCategory: string;
  @Input('productPrice') productPrice: number;
  @Input('district') district: string;
  @Input('postDate') postDate: string;
  @Input('productImage') productImage: string[];
  @Input('productDescription') productDescription: string;
  @Input('contact') contact: string;
  
  product = PRODUCTS[0];
  slides: string[]; 
  currentIndex: number = 0;

  getCurrentSlideUrl(): string{
    return this.slides[this.currentIndex];
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  constructor() { }

  ngOnInit(): void {
    this.slides = this.productImage;
  }

}
