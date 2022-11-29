import { Component, OnInit } from '@angular/core';
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
      description: 'Description',
      image: 'Image',
    },
  ];
  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      tradeOption: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  addProduct() {}
}
