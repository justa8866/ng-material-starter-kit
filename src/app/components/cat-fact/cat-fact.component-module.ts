import { NgModule } from '@angular/core';
import { CatFactComponent } from './cat-fact.component';
import { AsyncPipe, NgIf } from "@angular/common";
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    AsyncPipe,
    NgIf,
    MatCardModule
  ],
  declarations: [CatFactComponent],
  providers: [],
  exports: [CatFactComponent]
})
export class CatFactComponentModule {
}
