import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss'],
})
export class ProductInformationComponent implements OnInit {
  tradeOptionRadioButton = ['sell', 'buy'];
  informationType = [
    {
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

  constructor(private formBuilder: FormBuilder) {}

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
  addProduct() {}

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
}
