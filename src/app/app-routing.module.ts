import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExtendProductComponent } from './components/extend-product/extend-product.component';
import { RegisterComponent } from './components/register/register.component';
import { ExtendProductComponentModule } from './components/extend-product/extend-product.component-module';
import { ExtendProductServiceModule } from './services/extend-product.service-module';
import { RegisterComponentModule } from './components/register/register.component-module';
import { RegisterServiceModule } from './services/register.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: 'register', component: RegisterComponent }]),
    RegisterComponentModule,
    RegisterServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
