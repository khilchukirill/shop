import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    productsInCart: Array<ProductModel> = [];

    product: ProductModel;

  getProductsInCart (): Array<ProductModel> | null {
    if(this.productsInCart.length > 0) {
        return this.productsInCart;
    } else  {
        return null;
    }

  }

    addToCart(product: ProductModel): void {
    this.productsInCart.push(product);
    }

}
