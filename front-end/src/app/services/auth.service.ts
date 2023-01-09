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
  private isLoggedIn$: boolean = true;

  private setLoggedIn(data: boolean): void {
    this.isLoggedIn$ = data;
  }
  public getLoggedIn(): boolean {
    return this.isLoggedIn$;
  }
  private userInfo = {
    id: "",
    email: "",
    username: ""
  }
  private setUserInfo(userInfo: { _id: string; email: string; username: string }) {
    this.userInfo["id"] = userInfo._id;
    this.userInfo["email"] = userInfo.email;
    this.userInfo["username"] = userInfo.username;
  }
  // todo : getUsername -> gerUserId
  // public getUserId() {
  //   return this.userInfo.id;
  // }
  public getUsername() {
  return this.userInfo.username;
  }

  constructor(private http: HttpClient) {}

  signupUser(email: string, username: string, password: string) {
    return this.http.post<any>(`${_signupUrl}/user/register`, {
      email,
      username,
      password
    });
  }
  
  // http post login
  // return Observerble
  loginUser(email: string, password: string) {
    return this.http.post<any>(`${_signupUrl}/login`, { email, password });
  }
    
  // If login success, update login status information: LoggedIn, UserInfo
  loginUpdate(loggedin: boolean, user: { _id: string; email: string; username: string }) {
    this.setLoggedIn(loggedin);
    this.setUserInfo(user);
  }
}

