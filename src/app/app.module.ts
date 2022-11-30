import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/components/first.component';
import { ProductComponent } from './product/Components/product.component';
import { ProductListComponent } from './product/product-list/Components/product-list.component';
import { ProductsService } from './product/services/products.service';
import { CartListComponent } from './cart/cart-list/components/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
