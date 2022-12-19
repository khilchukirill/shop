import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],

})
export class ProductComponent {

  @Input() value: ProductModel = new ProductModel(0,'', '', '', 0, true);

  @Output() sendToParent: EventEmitter<ProductModel> = new EventEmitter();

  toCart(): void {
    this.sendToParent.emit(this.value)
  }

}
