import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-register-page',
  templateUrl: './product-register-page.component.html',
  styleUrls: ['./product-register-page.component.scss'],
})
export class ProductRegisterPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
