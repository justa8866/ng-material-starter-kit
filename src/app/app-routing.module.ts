import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import {AgePredictionComponentModule} from "./components/age-prediction/age-prediction.component-module";
import {AgeServiceModule} from "./services/age.service-module";
import {SingleProductComponent} from "./components/single-product/single-product.component";
import {SingleProductComponentModule} from "./components/single-product/single-product.component-module";
import {SingleProductServiceModule} from "./services/single-product.service-module";
import {SingleCartComponent} from "./components/single-cart/single-cart.component";
import {SingleCartServiceModule} from "./services/single-cart.service-module";
import {SingleCartComponentModule} from "./components/single-cart/single-cart.component-module";


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'product/:id',
      component: SingleCartComponent,
    }
  ]), SingleCartComponentModule, SingleCartServiceModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
