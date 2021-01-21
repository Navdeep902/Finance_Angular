import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Transaction } from '../models/transaction.model';
import { ProductService } from '../services/product.service';
import { EMICardService } from '../services/emicard.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Cart } from '../models/cart.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-emi-tenures',
  templateUrl: './emi-tenures.component.html',
  styleUrls: ['./emi-tenures.component.css'],
  providers: [DatePipe]
})
export class EmiTenuresComponent implements OnInit {

  transaction: any; 
  cartProducts:any;
  cardNumber: any;

  tenure:any;
  pm:any;
  temp:any;

  data:any = [
    {id_:3, t: "3 MONTHS"},
    {id_:6, t: "6 MONTHS"},
    {id_:9, t: "9 MONTHS"}
  ];

  constructor(private _activatedRouter: ActivatedRoute, private _router: Router, private productService:ProductService, private emicardService:EMICardService, public datePipe:DatePipe, private loginService:LoginService) {
    this.cardNumber=sessionStorage.getItem('cardNumber');
    this.productService.GetCartProducts(1).subscribe(d=>{
      this.cartProducts = d;
    })
    if(!!this.cartProducts){
      alert('Please add products to your cart')
    }
  }

  ngOnInit(): void {
    this.productService.GetTotalCostWithout(1).subscribe(d=>{
      this.pm=d;
    });
  }

  incQty(cartId:number, p:any){
    p.Quantity=p.Quantity+1;
    this.selected();
  }

  decQty(cartId:number, p:any){
    p.Quantity=p.Quantity-1;
    this.selected();
  }

  selected(){
    this.temp=0;
    for(let item of this.cartProducts){
      this.temp=this.temp+item.Cost*item.Quantity;
    }
    this.pm=this.temp/this.tenure.id_;
  }
  
  pnow(){
    for(let e of this.cartProducts){
      this.transaction = new Transaction(e.Product_ID, new Date(), (e.Cost*e.Quantity)/this.tenure.id_, this.cardNumber, this.tenure.id_);
      console.log(this.transaction);
      this.emicardService.PostTransactions(this.transaction).subscribe(d=>console.log(d));
    }
  }

  deletefromcart(i:number, pId:number){
    this.cartProducts.splice(i, 1);
    this.emicardService.DeleteProductFromCart(1, pId).subscribe();
    this.selected();
  }
}
