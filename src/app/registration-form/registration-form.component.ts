import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { RegisterDetails } from '../login.modal';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  repeatFieldTextType: boolean;
  fieldTextType: boolean;
  password: string;
  ConfirmPassword: string
  text: string;
  passwordError: boolean = false;
  RegisterationForm: RegisterDetails = <RegisterDetails>{}
  Days: any[] = [];
  Months: any[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"];
  Years: any = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
    2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

  constructor(private _router: Router, private _loginService: LoginService, public toastr: ToastrManager) { }

  ngOnInit(): void {

    this.Days[31];
    for (var i = 0; i <= 31; i++) {
      this.Days[i] = i;
    }

  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

  navigate() {
    this._router.navigate(['']);

  }


  Pass(y) {
    this.password = y.target.value
    console.log(this.password)
  }

  onKeyUp(x) { 
    this.text = x.target.value
    console.log(this.text)
    if (this.text == this.password) {

      this.passwordError = false;
      console.log(this.passwordError)
    }
    else {
      this.passwordError = true;
      console.log(this.passwordError)
    }
  }

  RegDetails(RegForm: NgForm) {
    this.RegisterationForm.firstName = RegForm["Fname"];
    this.RegisterationForm.lastName = RegForm["Lname"];
    this.RegisterationForm.phone = RegForm["phone"];
    this.RegisterationForm.email = RegForm["Email"]
    this.RegisterationForm.PostalCode = RegForm["Postalcode"]
    this.RegisterationForm.password = RegForm["password"];
    this.RegisterationForm.confirmPassword = RegForm["ConfirmPassword"];
    var m = RegForm["Male"];
    var f = RegForm["Female"];
    this.RegisterationForm.type = "TOC"
    if (m == true) {
      this.RegisterationForm.Gender = "Female";
    }
    else {
      this.RegisterationForm.Gender = "male";
    }

    console.log(this.RegisterationForm)
    this.toastr.successToastr("Registered Successfully!!", ' Success', { toastTimeout: 2000 });

    


  }

  LogSwitch() {
    this._router.navigate(['']);
  }

  RegisterSwitch() {
    this._router.navigate(['Registration']);
  }





}
