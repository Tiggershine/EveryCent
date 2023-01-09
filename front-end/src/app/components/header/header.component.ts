import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output() InputText = new EventEmitter<string>();
  @Output() searchTitle = new EventEmitter<string>();

  routePath: string;  // route path
  screenMode: string;
  headerC: any;
  headerFixed: boolean = false;  
  searchInput: string;
  
  isLoggedIn: boolean;
  inMainpage: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _authservice: AuthService,
  ) { }

  ngOnInit(): void {
    // get data from routing.module.ts
    this.routePath = this.route.snapshot.data['path'];
    // screenMode depends on user screen size 
    let screenWidth = window.innerWidth;
    (screenWidth > 767) ? this.screenMode = "W" : this.screenMode = "M";
    this.isLoggedIn = this._authservice.getLoggedIn();
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
    this.router.navigate(['search']);
  }  
}
