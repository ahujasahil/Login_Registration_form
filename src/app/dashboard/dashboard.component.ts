import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  EmployeeData: any;
  displayData: any;

  constructor(private http: HttpClient, private _loginService: LoginService, public toastr: ToastrManager) { }

  ngOnInit(): void {
    this._loginService.getData()
       .subscribe(data => {this.EmployeeData = data
      console.log(data)})
  }

  popup(name){
    console.log(name)
    alert(name)
    
  }

  Citypopup(city){
    this.toastr.successToastr(city, 'You are in',{ toastTimeout: 2000 });
  }

  empData()
  {
    this._loginService.getData()
       .subscribe(data => {data
      console.log(data)})
  }

  displayName(name){

    this.displayData=name
    console.log(this.displayData)
  }

}
