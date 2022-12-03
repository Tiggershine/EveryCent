import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../models/mock-product';
import { Slide } from "../models/slideInterface";
import { Slides } from '../models/slideData';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  slides: Slide[] = Slides;
  product = PRODUCTS[0];
  currentIndex: number = 0;

  getCurrentSlideUrl(): string{
    return this.slides[this.currentIndex].url;
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
  }

}
