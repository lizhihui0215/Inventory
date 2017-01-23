import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { SharedComponent } from './shared/shared.component';
import { CoreComponent } from './core/core.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductImageComponent } from './products/shared/product-image/product-image.component';
import { ProductDepartmentComponent } from './products/shared/product-department/product-department.component';
import { ProductPriceComponent } from './products/shared/product-price/product-price.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    SharedComponent,
    CoreComponent,
    ProductsListComponent,
    SharedComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    ProductPriceComponent,
    FormsComponent,
    FormsModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
