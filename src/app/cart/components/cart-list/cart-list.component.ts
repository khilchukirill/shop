import {Component, Input,} from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import {ProductModel} from "../../../products/models/product-model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  isEmpty: boolean = false;
  @Input() product: ProductModel = {
    name: '',
    brand: '',
    model: '',
    price: 0
  };


  constructor(public cartService: CartService) {
  }

}
