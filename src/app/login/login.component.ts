import {​​​​​ Component, OnInit }​​​​​ from '@angular/core';
import {​​​​​ NgForm }​​​​​ from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({​​​​​
  selector: 'app-login',          
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}​​​​​)

export class LoginComponent implements OnInit {​​​​​

  public login: boolean=false;

  constructor( private _activatedRouter: ActivatedRoute, private _router: Router, private loginService:LoginService) {​​​​​ }​​​​​

  ngOnInit(): void {​​​​​
  }​​​​​

  public onSubmit(f: NgForm){​​​​​
    this.loginService.GetUserLoginCheck(f.value.username, f.value.password).subscribe(d=>{
      if(d==1){
        sessionStorage.setItem('username', f.value.username);
        this.loginService.GetCardNumberWithUsername(f.value.username).subscribe(d=>{
          sessionStorage.setItem('cardNumber', <string>d);
        })
        this.login=true;
        console.log('inside login component '+true);
        this._router.navigate(['/list']);
      }
      else{
        alert('Invalid username or password');
      }
    })
  }​​​​​
}​​​​​
