import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

import { Cart } from '../models/cart.model';
import { LoginService } from '../services/login.service';

@Component({
  //selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  searchProduct:string="";
  products:any;
  cart:any;
  cardNumber: any;

  constructor(private _activatedRouter: ActivatedRoute, private _router: Router, private productService:ProductService, private loginService:LoginService) {
    this.cardNumber=sessionStorage.getItem('cardNumber');
    this.productService.GetAllProducts().subscribe(p=>{
      this.products = p;
    })
   }

  emitenure(id: number): void{
    this._router.navigate(['/tenure'/*, this.cardNumber*/]);
  }

  addtocart(id: number){
    this.cart = new Cart(1, this.cardNumber, id, 1);
    this.productService.PostCart(this.cart).subscribe(d=>console.log(d));
    if(sessionStorage.getItem('username'))
    {
      alert('Selected item added to your cart');
    }else{
      alert('Please login to access cart')
    }
  }

  ngOnInit(): void {
    console.log(this.cardNumber);
  }

}
