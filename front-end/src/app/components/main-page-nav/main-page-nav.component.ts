import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-page-nav',
  templateUrl: './main-page-nav.component.html',
  styleUrls: ['./main-page-nav.component.scss']
})
export class MainPageNavComponent implements OnInit {
  
  @Output() InputText = new EventEmitter<string>();
  
  screenMode: string;
  searchInput: string;

  constructor() {}

  ngOnInit(): void {
    let screenWidth = window.innerWidth;
    (screenWidth > 767) ? this.screenMode = "web" : this.screenMode = "mobile"
  }
  @HostListener ('window:resize', ['$event'])
  onResize(event: any) {
    let screenWidth = window.innerWidth;
    (screenWidth > 767) ? this.screenMode = "web" : this.screenMode = "mobile"
  }
  searchText() {
    this.InputText.emit(this.searchInput);    
  }  
}
