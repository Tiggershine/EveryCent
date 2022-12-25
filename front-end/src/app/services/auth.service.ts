import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface loginResponse {
  validUser: boolean
}

const _signupUrl = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {}

  signupUser(email: string, password: string) {
    return this.http.post<any>(`${_signupUrl}/register`, {
      email,
      password
    });
  }

  // signupUser(email: string, password: string) {
  //   return this.http.post<any>(`api/register`, {
  //     email,
  //     password
  //   });
  // }


  loginUser(email: string, password: string) {
    return this.http.post<any>(`${_signupUrl}/login`, {
      email,
      password
    });
  }


  // getUserDetails(email: string, password: string) {
  //   return this.http.post('', {
  //     email,
  //     password
  //   }).subscribe(data => {
  //     console.log(data, " is what we got from the server!")
  //   })
  // }


}
