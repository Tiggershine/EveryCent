import { DOCUMENT } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-nav',
  templateUrl: './main-page-nav.component.html',
  styleUrls: ['./main-page-nav.component.scss']
})
export class MainPageNavComponent implements OnInit {
  
  navhidden: boolean = true;
  @HostListener('window:scroll', ['$event']) onscroll() {
    if(window.scrollY > 50) { // 650으로 바까라
      this.navhidden = false;
    } else {
      this.navhidden = true;
    }
  }
  constructor() {}

  ngOnInit(): void {
  }
}
