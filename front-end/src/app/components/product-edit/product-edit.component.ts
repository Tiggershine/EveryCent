import { Component, HostListener, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
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
    user: 'hanbit',
    title: 'Product'
  };

  screenMode: string;
  selectedFiles?: FileList;
  previews: string[] = [];
  imagename: string[] = [];
  multipleImages: string[] = [];
  counts: boolean;
  numberOfFiles: number = null;

  constructor(private cardsService: CardsService, private activatedRoute: ActivatedRoute,) {
    activatedRoute.params.subscribe((params) => {
      if(params['productId'])
      cardsService.getProduct(params['productId']).subscribe((editCard) =>{
        this.products = editCard
      })
    })
  }

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
    }
  }

  updateCard(): void {
    const data = {
      title: this.products.title,
      description: this.products.description,
      price: this.products.price,
      category: this.products.category,
      imageUrl: this.products.imageUrl,
      district: this.products.district,
      dealType: this.products.dealType,
      user: this.products.user,
      contact: this.products.contact,
    };

    this.cardsService.create(data).subscribe({
      next: (response) => {
        console.log(response);
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
  }



  deleteCard(){

    this.cardsService.delete(this.products._id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
  })
}
}
