import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../models/product.model';

@Pipe({
    name:'productFilter'
})
export class ProductFilterPipe implements PipeTransform{
    transform(products:any, searchProduct:string): any{
        if(!products || !searchProduct){
            return products;
        }
        
        return products.filter((p: { Name: string; }) => p.Name.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1);
    }
}