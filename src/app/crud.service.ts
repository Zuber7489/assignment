import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
url='http://localhost:3000/employeedetails/'
  constructor(public http:HttpClient) { }

postdata(id:any){
  return this.http.post(this.url,id)
}
getdata(){
  return this.http.get(this.url)
}
deletedata(id:any){
  return this.http.delete(this.url+id)
}
editdata(id:any){
  return this.http.get(this.url+id)
}
updatedata(id:any,data:any){
  return this.http.put(this.url+id,data)
}

getEmployeeDetail(id:any){
  return this.http.get(this.url+id)
}
}