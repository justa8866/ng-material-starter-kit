import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CategoriesMenuComponent} from "./components/categories-menu/categories-menu.component";
import {CategoriesMenuComponentModule} from "./components/categories-menu/categories-menu.component-module";
import {CategoriesMenuServiceModule} from "./services/categories-menu.service-module";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'categories-menu',
      component: CategoriesMenuComponent,
    }
  ]), CategoriesMenuComponentModule, CategoriesMenuServiceModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
