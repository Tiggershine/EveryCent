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

  signupUser(email: string, username: string, password: string) {
    return this.http.post<any>(`${_signupUrl}/user/register`, {
      email,
      username,
      password
    });
  }

  loginUser(email: string, password: string) {
    return this.http.post<any>(`${_signupUrl}/user/login`, {
      email,
      password
    });
  }


}
