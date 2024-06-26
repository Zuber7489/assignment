import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(public auth:AuthService ,public router:Router) { }

  signupForm=new FormGroup({
name:new FormControl('',Validators.required),
email:new FormControl('',[Validators.required, Validators.email]),
password:new FormControl('', [Validators.required, Validators.minLength(6)])
  })

submitForm(){
  if (this.signupForm.valid) {
    this.auth.postForm(this.signupForm.value).subscribe((res) => {
      alert('User Registered Successfully');
      this.router.navigate(['/']);
    });
    console.log(this.signupForm.value);
  }else{
    alert('Please Fill The Form Value')
  }
}
  ngOnInit(): void {
  } 

}
