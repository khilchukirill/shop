import { Injectable, OnInit } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Array<ProductModel> {
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
      },
    
      {
        name: 'Headphones',
        brand: 'Apple',
        model: 'AirPods Pro'
      }
    ];
    }
}



