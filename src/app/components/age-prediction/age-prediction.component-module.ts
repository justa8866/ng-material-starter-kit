import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, NgIf} from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { AgePredictionComponent } from './age-prediction.component';

@NgModule({
  imports: [
    MatCardModule,
    NgIf,

    AsyncPipe,
    CommonModule
  ],
  declarations: [AgePredictionComponent],
  providers: [],
  exports: [AgePredictionComponent]
})
export class AgePredictionComponentModule {
}
