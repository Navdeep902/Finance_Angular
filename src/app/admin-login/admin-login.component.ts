import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor( private _activatedRouter: ActivatedRoute, private _router: Router, private loginService:LoginService) {​​​​​ }​​​​​

  ngOnInit(): void {​​​​​
  }​​​​​

  onSubmit(f: NgForm){​​​​​
    this.loginService.GetAdminLoginCheck(f.value.username, f.value.password).subscribe(d=>{
      if(d==1){
        sessionStorage.setItem('adminUsername', f.value.username);
        sessionStorage.setItem('adminPassword', f.value.password);
        this._router.navigate(['/adminview']);
      }else{
        alert('Invalid username or password');
      }
    })
  }​​​​​

}
