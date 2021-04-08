import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Login } from '../login.modal';
import { LoginService } from '../Services/login.service';
import { User } from './user';

var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  repeatFieldTextType: boolean;
  fieldTextType: boolean;
  Credentials: Login = <Login>{}
  Response: any;

  constructor(private _loginService: LoginService, private _router: Router, public toastr: ToastrManager) { }

  public user = new User('', '');
  public errorMsg = '';

  ngOnInit(): void {
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

  login() {
    if (!this._loginService.login(this.user)) {
      this.errorMsg = 'Failed to login';
      this.toastr.errorToastr('Please Enter Valid Credentials!!.', 'Oops!');

    }
    else {
      console.log("login succesfull")
      this.toastr.successToastr("Loggedin Successfully!!", ' Success', { toastTimeout: 2000 });
      this._router.navigate(['/Dashboard']);

    }
  }

  LogSwitch() {
    this._router.navigate(['']);
  }
  
  RegisterSwitch() {
    this._router.navigate(['Registration']);
  }

}
