import { Component, OnInit, Input, HostListener } from '@angular/core'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  /**
   *  [ Properties for header-DOM ]
   *  - leftIcon: directory source for left icon on header
   *  - righttIcon: directory source for right icon on header
   *  - leftIconLink: loaded Component, wenn click on leftIcon
   *  - rightIconLink: loaded Component, wenn click on rightIcon
   *  - text: text showed on center header
   */
  @Input() leftIcon?: string;
  @Input() rightIconWeb1?: string;
  @Input() rightIconWeb2?: string;
  @Input() rightIconMobile?: string;
  @Input() leftIconLink?: string;
  @Input() rightIconWeb1Link?: string;
  @Input() rightIconWeb2Link?: string;
  @Input() rightIconMobileLink?: string;
  @Input() rightBtn1Show?: boolean;
  @Input() rightBtn2Show?: boolean;
  @Input() rightBtnMobileShow?: boolean;


  screenMode: string;
  

  constructor() { }

  ngOnInit(): void {
      let screenWidth = window.innerWidth;
      (screenWidth > 767) ? this.screenMode = "web" : this.screenMode = "mobile"
  }

  @HostListener ('window:resize', ['$event'])
    onResize(event: any) {
      let screenWidth = window.innerWidth;
      (screenWidth > 767) ? this.screenMode = "web" : this.screenMode = "mobile"
      console.log(this.screenMode);
    }
  
}
