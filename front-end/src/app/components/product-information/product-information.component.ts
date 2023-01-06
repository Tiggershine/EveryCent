import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardsService } from 'src/app/services/cards.service';
import { Product } from 'src/app/models/product';
import { response } from 'express';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss'],
})
export class ProductInformationComponent implements OnInit {
  tradeOptionRadioButton = ['sell', 'buy'];

  informationType = [
    {
      sellOption: 'I want',
      title: 'Title',
      category: 'Category',
      price: 'Price',
      district: 'District',
      description: 'Description',
      image: 'Image',
    },
  ];

  categoryType = [
    { category: 'Shoes' },
    { category: 'Electronics' },
    { category: 'Etc.' },
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

  product: Product = {
    productId: '',
    productTitle: 'productTitleWorks',
    productPrice: 123213,
    district: '',
    productCategory: '',
    productDescription: 'descriptionWorks',
    productImage: ['232332'],
    contact: '',
    dealType: 'buy',
    postDate: '',
  };

  // title,
  // description,
  // price,
  // imageUrl,
  // user,
  // district,
  // dealType,

  // productId!: string;
  // userId?: string;
  // productTitle!: string;
  // productPrice!: number;
  // district?: string;
  // productCategory?: string;
  // productDescription?: string;
  // productImage!: string[];
  // contact?: string;
  // dealType?: string;
  // postDate!: string;

  //productForm!: FormGroup;
  screenMode: string;
  imageData!: string;
  products: Product = {};
  submitted = false;

  constructor(private formBuilder: FormBuilder, private cardsService: CardsService) {}

  ngOnInit(): void {
    // this.productForm = this.formBuilder.group({
    //   productName: ['', Validators.required],
    //   category: ['', Validators.required],
    //   date: ['', Validators.required],
    //   tradeOption: ['', Validators.required],
    //   price: ['', Validators.required],
    //   comment: ['', Validators.required],
    //   district: ['', Validators.required],
    // });

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
  
  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.productForm.patchValue({ image: file });
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
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
      }
    });
  }
}
