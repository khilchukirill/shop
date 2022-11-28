import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  listOfProducts: Array<ProductModel> = [
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
  ]

  getProducts() {
    return this.listOfProducts;
    }
}



