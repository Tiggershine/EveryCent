import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { json } from 'body-parser';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductServiceService
  ) {}

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

  addProduct(): void {
    const data = {
      title: this.product.productTitle,
      description: this.product.productDescription,
      price: this.product.productPrice,
      imageUrl: this.product.productImage,
      user: {
        email: 'hanbit@gmail.com',
        password: 'love0324465',
        username: 'hanbitt',
      },
      district: this.product.district,
      dealType: this.product.dealType,
    };

    this.productService.create(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }

  // onFileSelect(event: Event) {
  //   const file = (event.target as HTMLInputElement).files?.[0];
  //   this.productForm.patchValue({ image: file });
  //   const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  //   if (file && allowedMimeTypes.includes(file.type)) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imageData = reader.result as string;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }
}
