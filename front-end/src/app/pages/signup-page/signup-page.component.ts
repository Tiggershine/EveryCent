import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})

export class SignupPageComponent implements OnInit {
  iconLWLink: string = '';
  iconLMLink: string = '';
  singupUserData = {
    "email": "",
    "username": "",
    "password": ""
  }
  confirmPassword: string;
  isDataIncorrect: boolean = false;
  warningMsg: string = "Passwords do not same!";

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}

  passwordConfirm(): boolean {
    return this.singupUserData.password === this.confirmPassword;
  }

  signupUser() {
    // If password and comfirmPassword do not same, show the warning message.
    if (!this.passwordConfirm()) {
      this.isDataIncorrect = true;
      return console.log("Passwords do not same!");
    } 
    this._auth.signupUser(this.singupUserData.email, this.singupUserData.password).subscribe(data => {
      // if(data.success) {
        console.log(data);
      // }
    })
  }

   
}
