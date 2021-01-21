import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Finance';
  cardNumber: any;
  username: any;
  adminUsername: any;

  constructor(private _router: Router, private loginService: LoginService) {
    this.cardNumber = sessionStorage.getItem('cardNumber');
    this.username = sessionStorage.getItem('username');
    this.adminUsername = sessionStorage.getItem('adminUsername');
  }

  logout() {
    sessionStorage.clear();
    window.location.reload();
    this._router.navigate(['/']);
  }

  onclick(): void {
    this._router.navigate(['/tenure']);
  }
}
