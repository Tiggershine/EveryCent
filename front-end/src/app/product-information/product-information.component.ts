import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../models/file-handle.model';
import { Product } from '../models/product';

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
      location: 'Location',
      description: 'Description',
      image: 'Image',
    },
  ];

  categoryType = [
    { category: 'Shoes' },
    { category: 'Electronics' },
    { category: 'Etc.' },
  ];

  locationType = [
    { place: 'Aachen Mitte' },
    { place: 'Brand' },
    { place: 'Eilendorf' },
    { place: 'Haarem' },
    { place: 'Kornelimünster Walheim' },
    { place: 'Laurensberg' },
    { place: 'Richterich' },
  ];

  productForm!: FormGroup;
  screenMode: string;
  imageData!: string;

  product: Product = {
    productImage: [],
    productTitle: '',
    productPrice: 0,
    postDate: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      tradeOption: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      district: ['', Validators.required],
    });

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

  addProduct() {
    alert('The product has been added');
  }

  onFileSelected(event: Event) {
    if (event.target as HTMLInputElement) {
      const file = (event.target as HTMLInputElement).files?.[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };

      this.product.productImage.push(fileHandle);
    }
  }

  prepareFormData(product: Product): FormData {
    const formData = new FormData();
    formData.append(
      'product',
      new Blob([JSON.stringify(product)], { type: 'application/json' })
    );

    for (var i = 0; i < product.productImage.length; i++) {
      formData.append(
        'imageFile',
        product.productImage[i].file,
        product.productImage[i].file.name
      );
    }

    return formData;
  }

  removeImage(i: number) {
    this.product.productImage.splice(i, 1);
  }
}
