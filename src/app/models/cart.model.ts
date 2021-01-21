import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class Cart{
    Cart_ID:number;
    Card_Number:number;
    Product_ID:number;
    Quantity?:number;
    constructor(Cart_ID:number=0, Card_Number:number=0, Product_ID:number=0, Quantity:number=1){
        this.Cart_ID=Cart_ID;
        this.Card_Number=Card_Number;
        this.Product_ID=Product_ID;
        this.Quantity=Quantity;
    }
}