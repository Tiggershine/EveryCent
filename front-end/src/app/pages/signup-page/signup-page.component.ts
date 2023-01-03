import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})

export class SignupPageComponent implements OnInit {
  iconLWLink: string = '';
  iconLMLink: string = '';

  signupUserData = {
    "email": "",
    "username": "",
    "password": ""
  }
  confirmPassword: string;
  isDataIncorrect: boolean = false;
  warningMsg: string;
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private _auth: AuthService) {}
  ngOnInit(): void {}

  passwordConfirm(): boolean {
    return this.signupUserData.password === this.confirmPassword;
  }

  passwordTooShort(): boolean {
    return this.signupUserData.password.length > 7;
  }

  signupUser() {
    // If password and comfirmPassword do not same, show the warning message.
    if (!this.passwordConfirm()) {
      this.isDataIncorrect = true;
      this.warningMsg = "Passwords do not same!";
      return console.log("Passwords do not same!");
    }

    if (!this.passwordTooShort()) {
      this.isDataIncorrect = true;
      this.warningMsg = "Password too short!";
      return console.log("Password too short!");
    }

    if(this.passwordConfirm() && this.passwordTooShort()){
      this._auth.signupUser(this.signupUserData.email, this.signupUserData.username, this.signupUserData.password).subscribe(data => {
      //if(data.success) {
      console.log(data);
      //}
      })
    }
  }
}
