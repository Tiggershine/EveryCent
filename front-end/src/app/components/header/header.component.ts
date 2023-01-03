import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderServiceService } from 'src/app/services/header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() iconLWLink?: string;
  @Input() iconR1WLink?: string;
  @Input() iconR2WLink?: string;
  @Input() iconLMLink?: string;
  @Input() iconR1MLink?: string;
  @Input() iconR2MLink?: string;
  @Output() InputText = new EventEmitter<string>();
  @Output() searchTitle = new EventEmitter<string>();

  routePath: string;  // route path
  screenMode: string;
  headerC: any;
  headerFixed: boolean = false;  
  searchInput: string;

  constructor(
    private route: ActivatedRoute,
    private headerService: HeaderServiceService) { 
  }

  ngOnInit(): void {
    // get data from routing.module.ts
    this.routePath = this.route.snapshot.data['path'];
    // screenMode depends on user screen size 
    let screenWidth = window.innerWidth;
    (screenWidth > 767) ? this.screenMode = "W" : this.screenMode = "M";
    this.headerC = this.headerService.getHeaderContentList().find((arr) => arr.id === this.routePath);
  }

  @HostListener ('window:resize', ['$event'])
  // On every resizing get the screen size data continuously
  onResize(event: any) {
    let screenWidth = window.innerWidth;
    (screenWidth > 767) ? this.screenMode = "W" : this.screenMode = "M";
  }
  @HostListener('window:scroll', ['$event']) onscroll() {
    if(window.scrollY > 200) {
      this.headerFixed = true;
    } else {
      this.headerFixed = false;
    }
  }
  searchText() {
    this.InputText.emit(this.searchInput);    
  }  
}
