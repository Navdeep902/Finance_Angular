import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../models/register.model';
import { AdminServiceService } from '../services/admin.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})

export class ChangepasswordComponent implements OnInit {

  username: string = '';
  pass: any;
  cpass: any;
  Admin: Register;

  constructor(private _activatedRouter: ActivatedRoute, private _router: Router, private adminService: AdminServiceService, private router: Router) {
    this.Admin = new Register();
    this.username = <string>sessionStorage.getItem('uname');
  }

  changepass(password: string, confirmpassword: string) {
    if (password) {
      if (password == confirmpassword) {
        this.Admin.username = this.username;
        this.Admin.Password = password;
        this.adminService.updatePassword(this.username, this.Admin).subscribe(d => {
          this._router.navigate(['/login']);
        })
      }
      else {
        alert('Password and Confirm Password do not match');
      }
    } else {
      alert('Please enter the password');
    }
  }

  ngOnInit(): void {
  }
}​​​​​