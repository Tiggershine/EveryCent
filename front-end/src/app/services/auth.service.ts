import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { response } from 'express';

interface loginResponse {
  validUser: boolean
}

const _signupUrl = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // todo: get data from sessions
  isLoggedIn$: boolean = false;

  constructor(
    private http: HttpClient,
  ) {}
  
  signupUser(email: string, username: string, password: string) {
    return this.http.post<any>(`${_signupUrl}/user/register`, {
      email,
      username,
      password
    });
  }

  loginUser(email: string, password: string) {
    
    //for test
    this.isLoggedIn$ = true;

    return this.http.post<any>(`${_signupUrl}/user/login`, {
      email,
      password,
    },{ responseType: 'text' as 'json' });
  }
}
 