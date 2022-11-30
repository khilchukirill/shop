import { Component} from '@angular/core';
import { ProductsService } from 'src/app/product/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],

})
export class ProductListComponent {
  
  constructor(public productsService: ProductsService) {

  }


}
