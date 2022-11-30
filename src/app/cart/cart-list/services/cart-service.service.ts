import { Injectable } from '@angular/core';
import { ProductModel } from '../../../product/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  
  getProductsInCart (): Array<ProductModel> {
    return [
        {
          name: 'Shaver',
          brand: 'Braun',
          model: 'ShaverTop'
        },
      
        {
          name: 'Phone',
          brand: 'Apple',
          model: 'Iphone 11'
        },
      
        {
        name: 'Watch',
        brand: 'Apple',
        model: 'Apple Watch 6'
        }
      ]
  }

  constructor() { }
}
