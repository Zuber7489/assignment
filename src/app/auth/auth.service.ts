import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }

  postForm(id:any){
  return  this.http.post('http://localhost:3000/signup',id)
  }
  getForm(){
  return  this.http.get('http://localhost:3000/signup')
  }
}
