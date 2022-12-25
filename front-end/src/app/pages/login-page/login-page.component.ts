import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginUserData = {
    "email": "",
    "password": ""
  }

  isDataInvalid: boolean = false;

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {}

  loginUser() {
    this._auth.loginUser(this.loginUserData.email, this.loginUserData.password).subscribe((data) => {
      if(data.validUser === false) {
        this.isDataInvalid = true;
        console.log(`isDataInvalid: ${this.isDataInvalid}`);
      } else {
        console.log(`isDataInvalid: ${this.isDataInvalid}`);
        return data;
      }
    });
  }

  

  

}
