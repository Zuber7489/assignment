import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
productid:any;
employeedata:any;
  constructor(public router:ActivatedRoute,public crud:CrudService) { }

  ngOnInit(): void {
    this.productid=this.router.snapshot.paramMap.get('id');
    console.log(this.productid);
    this.getEmployeeDetail();
  }

getEmployeeDetail(){
  this.crud.getEmployeeDetail(this.productid).subscribe(res=>{
    this.employeedata=res;
    console.log(this.employeedata)
  });
}


}
