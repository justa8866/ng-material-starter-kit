import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatServiceModule } from './services/cat.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { AgeServiceModule } from './services/age.service-module';
import { SingleProductComponentModule } from './components/single-product/single-product.component-module';
import { SingleProductServiceModule } from './services/single-product.service-module';
import { SingleCartComponentModule } from './components/single-cart/single-cart.component-module';
import { SingleCartServiceModule } from './services/single-cart.service-module';
import { SingleUserComponentModule } from './components/single-user/single-user.component-module';
import { SingleUserServiceModule } from './services/single-user.service-module';
import { DogServiceModule } from './services/dog.service-module';
import { DogComponentModule } from './components/dog/dog.component-module';
import { AllProductsComponentModule } from './components/all-products/all-products.component-module';
import { AllProductsServiceModule } from './services/all-products.service-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CategoriesCheckboxComponentModule } from './components/categories-checkbox/categories-checkbox.component-module';
import { CategoriesCheckboxServiceModule } from './services/categories-checkbox.service-module';
import { CategoriesMenuServiceModule } from './services/categories-menu.service-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { ProductTableServiceModule } from './services/product-table.service-module';
import { ProductTableComponentModule } from './components/product-table/product-table.component-module';

@NgModule({
  declarations: [AppComponent],
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
    SingleCartServiceModule,
    SingleUserComponentModule,
    SingleUserServiceModule,
    DogServiceModule,
    DogComponentModule,
    AllProductsServiceModule,
    AllProductsComponentModule,
    CryptoServiceModule,
    CryptoComponentModule,
    CategoriesCheckboxComponentModule,
    CategoriesCheckboxServiceModule,
    CategoriesMenuServiceModule,
    CategoriesMenuComponentModule,
    ProductTableServiceModule,
    ProductTableComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
