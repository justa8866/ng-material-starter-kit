import { NgModule } from '@angular/core';
import { SingleProductComponent } from './single-product.component';
import {AsyncPipe, CommonModule, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    AsyncPipe,
    MatCardModule,
    NgIf,
    CommonModule
  ],
  declarations: [SingleProductComponent],
  providers: [],
  exports: [SingleProductComponent]
})
export class SingleProductComponentModule {
}
