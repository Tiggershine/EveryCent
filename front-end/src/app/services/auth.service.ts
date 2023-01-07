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
  private loggedIn: boolean = false;

  private setLoggedIn(data: boolean) {
    this.loggedIn = data;
  }

  public getLoggedIn() {
    return this.loggedIn;
  }

  constructor(private http: HttpClient) {}

  signupUser(email: string, username: string, password: string) {
    return this.http.post<any>(`${_signupUrl}/user/register`, {
      email,
      username,
      password
    });
  }

  loginUser(email: string, password: string) {
    return this.http.post<any>(`${_signupUrl}/login`, { email, password });
  }
  
}
