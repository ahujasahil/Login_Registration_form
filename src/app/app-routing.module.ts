import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AuthGuard } from './Services/auth.guard';


const routes: Routes = [
{
  path: '', component: LoginComponent
}, 
{
  path: 'Dashboard', component: DashboardComponent
}, 
{
  path: 'Registration', component: RegistrationFormComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
