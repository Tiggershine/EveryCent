import { Component, HostListener, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Product } from 'src/app/models/product';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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

  products: Product = {
    user: { userId: this._authService.getUserId(), email: this._authService.getUserEmail() }
  };

  screenMode: string;
  selectedFiles?: FileList;
  previews: string[] = [];
  imagename: string[] = [];
  multipleImages: string[] = [];
  counts: boolean;
  numberOfFiles: number = null;

  constructor(
    private cardsService: CardsService,
    private _authService: AuthService,
    private router: Router
  ) { }

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

  onFileSelect(event: any): void {
    this.selectedFiles = event.target.files;
    this.numberOfFiles = this.selectedFiles.length;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      let reader: FileReader;
      for (let i = 0; i < this.numberOfFiles; i++) {
        reader = new FileReader();
        this.multipleImages = event.target.files;
        this.imagename[i] =
          '../../assets/images/productcardImages/' + event.target.files[i].name;
        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };
      }
      if (this.numberOfFiles <= 1) {
        this.counts = false;
      } else {
        this.counts = true;
      }
      reader.readAsDataURL(this.selectedFiles[0]);
      this.products.imageUrl = this.imagename;
      console.log(this.imagename);
    }
  }

  saveProduct(): void {


    if (confirm("Are you sure you want to save your post?")) {
      const data = {
        title: this.products.title,
        description: this.products.description,
        price: this.products.price,
        category: this.products.category,
        imageUrl: this.products.imageUrl,
        district: this.products.district,
        dealType: this.products.dealType,
        user: this.products.user,
        contact: this.products.user.email,
      };

      this.cardsService.create(data).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate([''])
        },
        error: (error) => {
          console.log(error);
        },
      });

      const formData = new FormData();

      for (let imgs of this.multipleImages) {
        formData.append('files', imgs);
        this.cardsService.createFile(formData);
        console.log(formData);
      }

    } else {
      this.router.navigate(['post'])
    }
  }

  cancelAlert() {
    if (confirm("Your changes could not be saved. Are you sure you want to cancel?")) {
      this.router.navigate([''])
    } else {
      this.router.navigate(['post'])
    }
  }
}
