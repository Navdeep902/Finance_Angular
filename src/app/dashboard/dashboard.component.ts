import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EMICardService } from '../services/emicard.service';
import { Transaction } from '../models/transaction.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  t:any;
  emicard:any;
  transactions:any;
  userProducts:any;
  cd:any;
  cardNumber:any;

  constructor(private _activatedRouter: ActivatedRoute, private _router: Router, private emicardService:EMICardService, private loginService:LoginService) {
    this.cardNumber=sessionStorage.getItem('cardNumber');
    this.emicardService.GetEMICard(this.cardNumber).subscribe(c=>{
      this.emicard = c;
      this.emicardService.GetCardTransactions(this.emicard.username).subscribe(t=>{
        this.transactions = t;
      })
      this.emicardService.GetUserProducts(this.emicard.username).subscribe(t=>{
        this.userProducts = t;
      })
    })
    
    this.emicardService.GetCreditDetails(this.cardNumber).subscribe(c=>{
      this.cd=c;
    })
  }

  ngOnInit(): void {
  }

  public pnow(id:number): void{
    /*
    this.t = new Transaction(this.userProducts.Product_ID, new Date(), this.userProducts.Amount_Paid, 1225481, this.userProducts.EMI_Tenure);
    this.emicardService.PostTransactions(this.t).subscribe(d=>console.log(d));
    */
    console.log(id);
    this._router.navigate(['/gateway', id]);
  }
}
