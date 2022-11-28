import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {HolidaysComponent} from "./components/holidays/holidays.component";
import {HolidaysServiceModule} from "./services/holidays.service-module";
import {HolidaysComponentModule} from "./components/holidays/holidays.component-module";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'public-holidays',
      component: HolidaysComponent,
    }
  ]), HolidaysComponentModule, HolidaysServiceModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
