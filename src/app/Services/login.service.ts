import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login, RegisterDetails } from '../login.modal';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public _url: string = "/assets/employees.json";

  isLogegdn:boolean=false;
  constructor(private http: HttpClient, private _router: Router) { }

  getData()
  {
    return this.http.get(this._url);
  }

  login(user) {
    console.log("enter 4")
    console.log(user)
    if (user.username =='test@gmail.com' && user.password == "123456"){
      localStorage.setItem("user",user.username);
      this.isLogegdn=true;
      return true;
    }
    return false;
  }

}
