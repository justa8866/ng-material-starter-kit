import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExtendProductComponent } from './components/extend-product/extend-product.component';
import { ExtendProductComponentModule } from './components/extend-product/extend-product.component-module';
import { ExtendProductServiceModule } from './services/extend-product.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-product', component: ExtendProductComponent },
    ]),
    ExtendProductComponentModule,
    ExtendProductServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
