import { Component, Input, Output} from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { ProductModel } from 'src/app/products/models/product-model';
import {CartService} from "../../../../cart/services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],

})
export class ProductListComponent {

products: Array<ProductModel>;

  constructor(public productsService: ProductsService,
              public cartService: CartService) {
    this.products = productsService.getProducts();
    console.log(this.products);
  }
  addToCart(product: ProductModel): void {
    this.cartService.addToCart(product);
  }
}
