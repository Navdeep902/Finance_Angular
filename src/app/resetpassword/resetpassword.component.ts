import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';
import { Email } from 'src/app/models/email.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})

export class ResetpasswordComponent implements OnInit {
  email: Email;
  resetPasswordEmail: any;
  mail: any;
  username: string = '';

  verify: any;
  constructor(private emailService: EmailService, private router: Router, private loginService: LoginService) {
    this.email = new Email;
    this.verify = this.email.otp;
  }

  SendOtp(to: any) {
    this.email.to = to;
    this.emailService.sendMail(this.email).subscribe(data => { });
    this.loginService.GetUserWithEmail(this.email.to).subscribe(d => {
      this.username = <string>d;
      sessionStorage.setItem('uname', this.username);
    })
    if(!this.email.to){
      alert('Please enter a valid email');
    }else{
      alert('OTP send to your registered email');
    }
  }

  verifyopt(reset: any) {
    if (reset == this.verify) {
      this.router.navigate(['/changepassword']);
    }
    else {
      alert('Please enter the valid OTP');
    }
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }
}​​​​​