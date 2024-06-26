import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeManagementSystemComponent } from './employee-management-system/employee-management-system.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'employeedetails', component:EmployeeManagementSystemComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'view/:id',component:ViewDetailComponent},
  {path:'add-details',component:AddDetailsComponent},
  {path:'signup',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
