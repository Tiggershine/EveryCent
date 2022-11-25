import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('leftIcon') leftIcon: string | undefined;
  @Input('rightIcon') rightIcon: string | undefined;
  @Input('headerText') headerText: string | undefined;
  @Input('leftIconLink') leftIconLink: string | undefined;
  @Input('rightIconLink') rightIconLink: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
