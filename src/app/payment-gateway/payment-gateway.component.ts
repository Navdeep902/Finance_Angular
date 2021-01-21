import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { EMICardService } from '../services/emicard.service';
import { Transaction } from '../models/transaction.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css'],
  providers: [DatePipe]
})
export class PaymentGatewayComponent implements OnInit {

  t: any;
  product: any;
  emiCardNumber?: any;
  username: any;
  pid: number = 0;
  allow: boolean = true;
  installBalance: boolean = true;
  lastMonth: any;

  name: any;
  cardNumber?: any;
  expires: any;
  cvc: any;

  constructor(private _activatedRouter: ActivatedRoute, private _router: Router, private emicardService: EMICardService, public datePipe: DatePipe, private loginService: LoginService) {
    this.pid = +this._activatedRouter.snapshot.params['id'];
    this.emiCardNumber = sessionStorage.getItem('cardNumber');
    this.username = sessionStorage.getItem('username');
    this.emicardService.GetUserProductWithId(this.username, this.pid).subscribe(p => {
      this.product = p;
      if (this.product.Balance == 0) {
        this.installBalance = false;
      }
    })

    this.emicardService.GetLastTransactionDate(this.username, this.pid).subscribe(d => {
      this.lastMonth = d;
      if ((new Date().getMonth() + 1) == this.lastMonth) {
        this.allow = false;
      }
    });
  }

  ngOnInit(): void {

  }

  saveTrans(paymentForm: NgForm) {
    console.log(paymentForm.value);
  }

  pay(): void {
    this.t = new Transaction(this.pid, new Date(), this.product.Current_Payment, this.emiCardNumber, this.product.EMI_Tenure);
    console.log(this.t);
    this.emicardService.PostTransactions(this.t).subscribe(d => console.log(d));
    alert('Payment has been done successfully');
    this._router.navigate(['/dashboard']);
  }
}
