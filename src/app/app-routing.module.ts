import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DogComponent} from "./components/dog/dog.component";
import {DogComponentModule} from "./components/dog/dog.component-module";
import {DogServiceModule} from "./services/dog.service-module";



@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'dog/image/random',
      component: DogComponent,
    }
  ]), DogComponentModule, DogServiceModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
