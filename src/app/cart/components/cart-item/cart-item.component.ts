import {Component, Input} from '@angular/core';
import {CartModel} from "../../models/cart-model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem: CartModel;

  @Input() showCart:boolean;

  @Input() index: number;

  increaseItem(): void {
    this.cartItem.count++
  }

  decreaseItem(): void {
    if(this.cartItem.count > 0) {
      this.cartItem.count--;
    }
    if (this.cartItem.count === 0) {
      this.removeItem(this.index)
    }
  }

  removeItem(index: number) {
    return this.cartService.removeItem(index);
  }

  constructor(private cartService: CartService) {
  }

}
