import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ProductModel } from '../../models/product-model';
import {CartService} from "../../../cart/services/cart.service";
import {ProductListComponent} from "../product-list/Components/product-list.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() value: ProductModel = {
    name: '',
    brand: '',
    model: '',
    price: 0
  };

  @Output() sendToParent: EventEmitter<ProductModel> = new EventEmitter();

  toCart(): void {
    this.sendToParent.emit(this.value)
  }

  constructor(public cartService:CartService){

  };

}
