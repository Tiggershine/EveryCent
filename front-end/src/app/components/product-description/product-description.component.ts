import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from 'src/app/models/mock-product';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  @Input() productId: string;
  @Input() productTitle: string;
  @Input() productCategory: string;
  @Input() productPrice: number;
  @Input() district: string;
  @Input() createdAt: string;
  @Input() productImage: string[];
  @Input() productDescription: string;
  @Input() contact: string;
  
  slides: string[]; 
  currentIndex: number = 0;
  
  constructor(
    private route: ActivatedRoute,
  ) { }

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

  ngOnInit(): void {
    this.slides = this.productImage;
  }

}
