import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {CatFactComponentModule} from "./components/cat-fact/cat-fact.component-module";
import { CatServiceModule } from './services/cat.service-module';
import {AgePredictionComponentModule} from "./components/age-prediction/age-prediction.component-module";
import {AgeServiceModule} from "./services/age.service-module";
import {SingleProductComponentModule} from "./components/single-product/single-product.component-module";
import {SingleProductService} from "./services/single-product.service";
import {SingleProductServiceModule} from "./services/single-product.service-module";
import {SingleCartComponentModule} from "./components/single-cart/single-cart.component-module";
import {SingleCartServiceModule} from "./services/single-cart.service-module";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CatFactComponentModule,
        CatServiceModule,
        AgePredictionComponentModule,
        AgeServiceModule,
        SingleProductComponentModule,
        SingleProductServiceModule,
        SingleCartComponentModule,
        SingleCartServiceModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
