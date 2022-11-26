import { NgModule } from '@angular/core';
import { SingleCartComponent } from './single-cart.component';
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    AsyncPipe,
    NgIf
  ],
  declarations: [SingleCartComponent],
  providers: [],
  exports: [SingleCartComponent]
})
export class SingleCartComponentModule {
}
