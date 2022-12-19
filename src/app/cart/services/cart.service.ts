import { Injectable } from '@angular/core';
import {CartModel} from "../models/cart-model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
    cartItems: Array<CartModel> = [];


  getProductsInCart (): Array<CartModel> {
    if(this.cartItems.length > 0) {
        return this.cartItems;
    } else  {
        return [];
    }
  }

  addToCart(cartItem: CartModel): void {
      cartItem.count = 1;
      if (this.cartItems.find(arrayItem => arrayItem.id === cartItem.id)) {
          cartItem.count++
      } else {
          this.cartItems.push(cartItem);
      }
  }

  countItems(): number {
      return this.cartItems.length
  }

  getItemSum(): number {
      let itemSum:number = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
          itemSum += this.cartItems[i].price * this.cartItems[i].count;
      }
      return itemSum;
  }

  removeItem(index: number): void {
      this.cartItems.splice(index, 1)
  }
}
