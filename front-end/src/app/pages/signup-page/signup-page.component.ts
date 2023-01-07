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

  passwordLongEnough(): boolean {
    return this.signupUserData.password.length > 7;
  }

  signupUser() {
    this.isDataIncorrect = false;
    // If password and comfirmPassword do not same, show the warning message.
    if (!this.passwordConfirm()) {
      this.isDataIncorrect = true;
      this.warningMsg = "Passwords do not same!";
    }

    if (!this.passwordLongEnough()) {
      this.isDataIncorrect = true;
      this.warningMsg = "Password too short!";
    }

    if(!this.isDataIncorrect){
      this._auth.signupUser(this.signupUserData.email, this.signupUserData.username, this.signupUserData.password).subscribe(data => {
        console.log(data);
      })
    }
  }
}
