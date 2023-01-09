import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  routePath: string;  // route path
  screenMode: string;
  headerFixed: boolean = false;  
  searchInput: string;
  isLoggedIn: boolean;
  inMainpage: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _authservice: AuthService,
    private _shareservice: ShareDataService,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

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
    this._shareservice.setSearchText(this.searchInput);
    this.router.navigate(['search']);
  }  
}
