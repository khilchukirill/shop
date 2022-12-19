import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Array<ProductModel> {
    return [
        new ProductModel(1, 'Shaver', 'Braun', 'ShaverTop', 1000, true),
        new ProductModel(2,'Phone', 'Apple', 'Iphone 11', 1500, true),
        new ProductModel(3,'Watch', 'Apple', 'AppleWatch 6', 1200, true),
        new ProductModel(4,'Tablet', 'Ipad', 'Pro 11.2', 800, true)
    ];
    }
}



