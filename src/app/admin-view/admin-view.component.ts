import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register.model';
import { AdminServiceService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  user:any;
  msg: undefined;
  constructor(private adminService:AdminServiceService, private router:Router) { 
    this.adminService.getAllUsersFromApi().subscribe(u=>{
      this.user = u;
    })
  }

  VerifyUser(username:Register){
      this.adminService.activateUser(username).subscribe(msg=>
       console.log("Done"));
      alert('User Verified');
      }

  deleteuserdata(username:string){
    if(window.confirm('Are sure you want to delete this item ?'))
    {
      this.adminService.deleteUser(username).subscribe(data=>
        (this.adminService.getAllUsersFromApi().subscribe(u=>{
          this.user = u;
        })))
    }
  }
  ngOnInit(): void {
  }
}


 /* deleteEmployee(employeeId: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.employeeService.deleteEmployeeById(employeeId).subscribe(() => {  
      this.dataSaved = true;  
      this.massage = 'Record Deleted Succefully';  
      this.loadAllEmployees();  
      this.employeeIdUpdate = null;  
      this.employeeForm.reset();  
  
    });  
  }  
}  */