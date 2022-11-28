import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CategoriesCheckboxComponent} from "./components/categories-checkbox/categories-checkbox.component";
import {CategoriesCheckboxComponentModule} from "./components/categories-checkbox/categories-checkbox.component-module";
import {CategoriesCheckboxServiceModule} from "./services/categories-checkbox.service-module";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'checkbox-categories',
      component: CategoriesCheckboxComponent,
    }
  ]), CategoriesCheckboxComponentModule, CategoriesCheckboxServiceModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
