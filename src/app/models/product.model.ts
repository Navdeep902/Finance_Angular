import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class Product{
    productId:number;
    name:string;
    cost:number;
    imagePath?:string;
    details:string
    constructor(productId_:number=0, name_:string="", cost_:number=0, imagePath_:string="", details_:string=""){
        this.productId=productId_;
        this.name=name_;
        this.cost=cost_;
        this.imagePath=imagePath_;
        this.details=details_;
    }
}