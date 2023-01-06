import { Component, HostListener, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss'],
})
export class ProductInformationComponent implements OnInit {
  tradeOptionRadioButton = ['sell', 'buy'];

  categoryType = [
    { category: 'Shoes' },
    { category: 'Electronics' },
    { category: 'Etc.' },
  ];

  districtType = [
    { place: 'Aachen Mitte' },
    { place: 'Brand' },
    { place: 'Eilendorf' },
    { place: 'Haarem' },
    { place: 'Kornelimünster Walheim' },
    { place: 'Laurensberg' },
    { place: 'Richterich' },
  ];

  screenMode: string;
  products: Product = {};
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

  // onFileSelect(event: Event) {
  //   const file = (event.target as HTMLInputElement).files?.[0];
  //   this.selectedFiles = event.target.files;

  //   const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  //   const numberOfFiles = this.selectedFiles.length;

  //   if (file && allowedMimeTypes.includes(file.type)) {
  //     for (let i = 0; i < numberOfFiles; i++) {
  //       const reader = new FileReader();
  //       reader.onload = (e: any) => {
  //         //this.imageData = reader.result as string;
  //         this.previews.push(e.target.result);
  //         console.log(this.previews);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   }
  // }

  onFileSelect(event: any): void {
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < 10; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
          console.log(this.previews);
        };
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  saveProduct(): void {
    const data = {
      _id: this.products._id,
      title: this.products.title,
      price: this.products.price,
      category: this.products.category,
      description: this.products.description,
      imageUrl: this.products.imageUrl,
      user: this.products.user,
      district: this.products.district,
      dealType: this.products.dealType,
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
