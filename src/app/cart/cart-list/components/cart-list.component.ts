import { Component,  } from '@angular/core';
import { CartServiceService } from 'src/app/cart/cart-list/services/cart-service.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  cartBlock: boolean = false;

  constructor(public getProductsInCart: CartServiceService) { 
  }

}
