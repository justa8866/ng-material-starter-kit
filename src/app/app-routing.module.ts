import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AllProductsComponent} from "./components/all-products/all-products.component";
import {AllProductsComponentModule} from "./components/all-products/all-products.component-module";
import {AllProductsServiceModule} from "./services/all-products.service-module";



@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'products',
      component: AllProductsComponent,
    }
  ]), AllProductsComponentModule, AllProductsServiceModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
