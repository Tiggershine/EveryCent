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
  signupBtnLink: string = '/signup';
  loginUserData = {
    "email": "",
    "password": ""
  }

  // value shows id && pw are correctly given or not
  isDataInvalid: boolean = false;
  loggedIn: boolean = false;

  constructor(
    private _auth: AuthService,
    private router: Router,) { }

  ngOnInit(): void {}

  // loginUser() {
  //   this._auth.loginUser(this.loginUserData.email, this.loginUserData.password).subscribe((data) => {
  //     if(data.validUser === false) {
  //       this.isDataInvalid = true;
  //     } else {
  //       this.router.navigateByUrl('/');
  //       return data;
  //     }
  //   });
  // }

   loginUser() {
     this._auth.loginUser(this.loginUserData.email, this.loginUserData.password).subscribe(data => {
      this.loggedIn = data.loggedIn;
      
      return this.loggedIn ? this.router.navigateByUrl('/') : this.isDataInvalid = true;
     });
  }


}
