import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {
  addemployee=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    position:new FormControl(''),
    salary:new FormControl(''),
  })
  constructor(public crud:CrudService,public router:Router) { }

  ngOnInit(): void {
  }

  addData(){
    this.crud.postdata(this.addemployee.value).subscribe(res=>{
      alert('Employee details Added Successfull')
      this.router.navigate(['/'])
      location.reload()
    },err=>{
    alert('Error Aara hai data me')
    })
    console.log(this.addemployee.value)
  }

}
