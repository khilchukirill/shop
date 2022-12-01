import { Component, Input, OnInit} from '@angular/core';
import { ProductModel } from '../../models/product-model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel = {
    name: '',
    brand: '',
    model: ''
  };
  productComponent(e: Event): void {
    console.log('Товар куплен');
  }

  constructor() { 
    
  }

  ngOnInit() {
    return this.product
  }

}
