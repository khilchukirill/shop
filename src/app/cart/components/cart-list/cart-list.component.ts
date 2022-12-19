import {Component, Input, OnInit,} from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import {DataService} from "../../../core/services/data.service";
import {Subscription} from "rxjs";
import {CartModel} from "../../models/cart-model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit{
  showCart: boolean = false;

  public get getItemSum(): number  {
    return this.cartService.getItemSum();
  }

  public get countItems(): number {
    return this.cartService.countItems()
  }

  private subscription = new Subscription()

  constructor(private dataService: DataService,
              private cartService: CartService) {
  }

  getCartItems(): Array<CartModel> {
    return this.cartService.getProductsInCart();
  }

  ngOnInit() {
    this.subscription = this.dataService.channel$.subscribe(data =>
    {
      let cartItem = new CartModel(data.id, data.brand, data.model, data.name, data.price, 0);
      this.cartService.addToCart(cartItem)
    });
  }

}
