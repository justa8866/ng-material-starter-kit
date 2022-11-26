import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog.component';
import { AsyncPipe, NgIf } from '@angular/common';

@NgModule({
  imports: [
    AsyncPipe,
    NgIf,
    CommonModule
  ],
  declarations: [DogComponent],
  providers: [],
  exports: [DogComponent]
})
export class DogComponentModule {
}
