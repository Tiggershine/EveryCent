import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  iconLWLink: string = '';
  iconLMLink: string = '';
  loginBtnLink: string = '/login';
  loginUserData = {
    "email": "",
    "password": ""
  }

  isDataInvalid: boolean = false;

  constructor(
    private _auth: AuthService,
    private router: Router,) { }

  ngOnInit(): void {}

  loginUser() {
    this._auth.loginUser(this.loginUserData.email, this.loginUserData.password).subscribe((data) => {
      if (data === 'login-success') {
        console.log(data);
        this.router.navigate(['/']);
      } else {
      }
    });
  }

  

  

}
