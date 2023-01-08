import { Component, HostListener, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Product } from 'src/app/models/product';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss'],
})
export class ProductInformationComponent implements OnInit {
  tradeOptionRadioButton = ['sell', 'buy', 'freecycle'];

  categoryType = [
    'Book',
    'Clothing',
    'Food',
    'Electronics',
    'Kitchen',
    'Furniture',
    'Sporting goods',
    'Hobbies',
  ];

  districtType = [
    'Markt',
    'Theater',
    'Lindenplatz',
    'St. Jakob',
    'Westpark',
    'Kronenberg',
    'Hörn',
    'Ponttor',
    'Hansemannplatz',
    'Soers',
    'Jülicher Straße',
    'Kalkofen',
    'Kaiserplatz',
    'Adalbertsteinweg',
    'Panneschopp',
    'Rothe Erde',
    'Forst',
    'Frankenberger Viertel',
    'Burtscheid',
    'Marschiertor',
    'Beverau',
  ];

  screenMode: string;
  imageuri: any;
  imagename: string[] = [];

  products: Product = {
    user: 'hanbit',
  };

  submitted = false;
  selectedFiles?: FileList;
  previews: string[] = [];

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    let screenWidth = window.innerWidth;
    screenWidth > 767
      ? (this.screenMode = 'web')
      : (this.screenMode = 'mobile');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let screenWidth = window.innerWidth;
    screenWidth > 767
      ? (this.screenMode = 'web')
      : (this.screenMode = 'mobile');
    console.log(this.screenMode);
  }

  counts: boolean;
  numberOfFiles: number = null;

  onFileSelect(event: any): void {
    this.selectedFiles = event.target.files;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      let reader: FileReader;
      for (let i = 0; i < this.selectedFiles.length; i++) {
        reader = new FileReader();
        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };
        this.imagename[i] = event.target.files[i].name;
      }
      this.numberOfFiles = this.selectedFiles.length;
      console.log(this.numberOfFiles);

      if (this.numberOfFiles <= 1) {
        this.counts = false;
      } else {
        this.counts = true;
      }
      this.imageuri = reader.readAsDataURL(this.selectedFiles[0]);
      console.log(this.imagename);
    }
  }

  saveProduct(): void {
    const data = {
      _id: this.products._id,
      title: this.products.title,
      description: this.products.description,
      price: this.products.price,
      category: this.products.category,
      imageUrl: this.products.imageUrl,
      district: this.products.district,
      dealType: this.products.dealType,
      user: this.products.user,
      contact: this.products.contact,
      createdAt: this.products.createdAt,
    };
    this.cardsService.create(data).subscribe({
      next: (response) => {
        console.log(response);
        this.submitted = true;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
