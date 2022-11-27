import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  /**
   *  [ Properties for header-DOM ]
   *  - leftIcon: directory source for left icon on header
   *  - righttIcon: directory source for right icon on header
   *  - leftIconLink: loaded Component, wenn click on leftIcon
   *  - rightIconLink: loaded Component, wenn click on rightIcon
   *  - text: text showed on center header
   */
  @Input() leftIcon: string;
  @Input() rightIcon: string;
  @Input() text: string;
  @Input() leftIconLink: string;
  @Input() rightIconLink: string;

  constructor() { }
  
}
