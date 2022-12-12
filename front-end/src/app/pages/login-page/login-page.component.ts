import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  leftIcon: string;
  leftIconLink: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.leftIcon = this.route.snapshot.data['leftIcon'];
    this.leftIconLink = this.route.snapshot.data['leftIconLink'];
  }

  

}
