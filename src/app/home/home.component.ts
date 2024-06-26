import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data:any;
id:any;
dataid:any;
editEmployeeDetail:any;
employeeIdToUpdate: any;

searchForm=new FormGroup({
  searchEmp:new FormControl('')
})

editEmployee=new FormGroup({
  name:new FormControl(''),
  email:new FormControl(''),
  position:new FormControl(''),
  salary:new FormControl('')
})

  constructor(public crud:CrudService) { }

  ngOnInit(): void {
    this.getEmployeeDetails()
    
  }

getEmployeeDetails(){
  this.crud.getdata().subscribe(res=>{
this.data=res;

  })
}



deleteData(id:any){
  this.crud.deletedata(id).subscribe(res=>{
location.reload()
  })
}

editForm(id:any){
  this.crud.editdata(id).subscribe(res=>{
    console.log(res)
    this.editEmployeeDetail=res;
   this.editEmployee.patchValue({
      name:this.editEmployeeDetail.name,
      email:this.editEmployeeDetail.email,
      position:this.editEmployeeDetail.position,
      salary:this.editEmployeeDetail.salary
    });
    this.employeeIdToUpdate = id;
      });
}

updateFormData(){
  this.crud.updatedata(this.employeeIdToUpdate,this.editEmployee.value).subscribe(res=>{
    alert('Data Updated SuccessFully')
    console.log(res)
    location.reload()
  })
}


search() {
  if (this.searchForm.value.searchEmp) {
    // Filter the data array based on the search term
    this.data = this.data.filter((employee: any) =>
      employee.name.toLowerCase().includes(this.searchForm.value?.searchEmp?.toLowerCase())
    );
  } else {
    // If no search term is entered, retrieve all employee details
    this.getEmployeeDetails();
  }
}


}
