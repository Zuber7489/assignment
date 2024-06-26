import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
finder:any;
showErrors:boolean=false;
loginForm=new FormGroup({
email:new FormControl('',Validators.required),
password:new FormControl('',Validators.required)
})



  constructor(public auth:AuthService,public router:Router) { }
  ngOnInit(): void {
  }
  submitForm() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      if (this.loginForm.value.email === 'admin' && this.loginForm.value.password === 'admin') {
        alert('Login Successfully');
        this.router.navigate(['/admin']); // Redirect to the admin component
      } else {
        this.auth.getForm().subscribe((res: any) => {
          this.finder = res.find((a: any) => {
            return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
          });
  
          if (this.finder) {
            alert('Login Successfully');
            this.router.navigate(['/home']); // Redirect to the employeedetails component
          } else {
            alert('Please Enter Correct Email or Password');
          }
        });
      }
    }
  }
  
}
 


