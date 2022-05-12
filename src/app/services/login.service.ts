import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  signUpApi = "http://localhost:3000/customer/sign-up";
  signInApi = "http://localhost:3000/customer/sign-in";
  signupGoogle = 'http://localhost:3000/customer/login-with-google';

  constructor(private http:HttpClient) { }

  public signUp(user:User){
    return this.http.post(this.signUpApi,user)
  }

  public signInn(user:User){
    return this.http.post(this.signInApi,user)
  }

  public SignInGoogle(email: any): Observable<any> {
    return this.http.post(this.signupGoogle, { email });
  }

  public checkToken() {
    return !!sessionStorage.getItem('jwt-token');
  }

}