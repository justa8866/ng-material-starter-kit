import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import {AgePredictionComponentModule} from "./components/age-prediction/age-prediction.component-module";
import {AgeServiceModule} from "./services/age.service-module";


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'age/:name',
      component: AgePredictionComponent
    }
  ]), AgePredictionComponentModule, AgeServiceModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
