import { Component, Input, Output} from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { ProductModel } from 'src/app/products/models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],

})
export class ProductListComponent {

products: Array<ProductModel>;

  constructor(public productsService: ProductsService) {
    this.products = productsService.getProducts();
  }


}
