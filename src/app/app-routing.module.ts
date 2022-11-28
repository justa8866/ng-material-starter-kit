import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductFormServiceModule } from './services/product-form.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'create-product', component: ProductFormComponent }
  ]),  ProductFormComponentModule, ProductFormServiceModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
