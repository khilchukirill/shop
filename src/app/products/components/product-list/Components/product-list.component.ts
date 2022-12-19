import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { ProductModel } from 'src/app/products/models/product-model';
import {BaseModel} from "../../../../core/models/base-model";
import {DataService} from "../../../../core/services/data.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {

products: Array<ProductModel> = new Array<ProductModel>();

  constructor(private productsService: ProductsService,
              private dataService: DataService) {
    this.products = productsService.getProducts();
  }
  addToCart(data: BaseModel) {
    this.dataService.putData(data);
  }
}



