import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cart } from '../models/cart.model';

@Injectable()
export class ProductService{

    constructor(private getHttp:HttpClient){
        
    }
    public GetAllProducts(){
        return this.getHttp.get("http://localhost:63352/api/Products");
    }

    public GetProduct(id:number){
        return this.getHttp.get("http://localhost:63352/api/Products/"+id);
    }

    public PostCart(c: Cart){
        return this.getHttp.post("http://localhost:63352/api/Carts", c);
    }

    public GetCartProducts(cartId:number){
        return this.getHttp.get("http://localhost:63352/api/Carts?cartId="+cartId);
    }

    public PutCart(cartId:number, c: Cart){
        return this.getHttp.put("http://localhost:63352/api/Carts?id="+cartId, c);
    }

    public GetTotalCost(cartId:number, currProductId:number, currProductQty:number){
        return this.getHttp.get("http://localhost:63352/api/Carts?cartId="+cartId+"&currProductId="+currProductId+"&currProductQty="+currProductQty);
    }

    public GetTotalCostWithout(cartId:number){
        return this.getHttp.get("http://localhost:63352/api/WithoutProduct?cart_Id="+cartId);
    }
}