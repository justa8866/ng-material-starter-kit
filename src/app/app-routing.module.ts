import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CryptoComponent} from "./components/crypto/crypto.component";
import {CryptoComponentModule} from "./components/crypto/crypto.component-module";
import {CryptoServiceModule} from "./services/crypto.service-module";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'crypto',
      component: CryptoComponent,
    }
  ]), CryptoComponentModule, CryptoServiceModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
