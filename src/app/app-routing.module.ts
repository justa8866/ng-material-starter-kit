import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ProductTableComponent} from "./components/product-table/product-table.component";
import {ProductTableComponentModule} from "./components/product-table/product-table.component-module";
import {ProductTableServiceModule} from "./services/product-table.service-module";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'product-search',
      component: ProductTableComponent,
    }
  ]), ProductTableComponentModule, ProductTableServiceModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
