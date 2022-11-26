import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SingleUserComponentModule} from "./components/single-user/single-user.component-module";
import {SingleUserComponent} from "./components/single-user/single-user.component";
import {SingleUserServiceModule} from "./services/single-user.service-module";



@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'users/:id',
      component: SingleUserComponent,
    }
  ]), SingleUserComponentModule, SingleUserServiceModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
