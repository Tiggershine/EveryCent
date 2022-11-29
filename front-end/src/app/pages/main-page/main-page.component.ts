import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  leftIcon: string;
  rightIconWeb1: string;
  rightIconWeb2: string;
  rightIconMobile: string;
  leftIconLink: string;
  rightIconWeb1Link: string;
  rightIconWeb2Link: string;
  rightIconMobileLink: string;
  rightBtn1Show: boolean;
  rightBtn2Show: boolean;
  rightBtnMobileShow: boolean;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.leftIcon = this.route.snapshot.data['leftIcon'];
    this.rightIconWeb1 = this.route.snapshot.data['rightIconWeb1'];
    this.rightIconWeb2 = this.route.snapshot.data['rightIconWeb2'];
    this.rightIconMobile = this.route.snapshot.data['rightIconMobile'];
    this.leftIconLink = this.route.snapshot.data['leftIconLink'];
    this.rightIconWeb1Link = this.route.snapshot.data['rightIconWeb1Link'];
    this.rightIconWeb2Link = this.route.snapshot.data['rightIconWeb2Link'];
    this.rightIconMobileLink = this.route.snapshot.data['rightIconMobileLink'];
    this.rightBtn1Show = this.route.snapshot.data['rightBtn1Show'];
    this.rightBtn2Show = this.route.snapshot.data['rightBtn2Show'];
    this.rightBtnMobileShow = this.route.snapshot.data['rightBtnMobileShow'];
  }
  
}
