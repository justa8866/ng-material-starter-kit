import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, NgForOf} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoriesListComponent } from './categories-list.component';
import {MatListModule} from "@angular/material/list";



@NgModule({
  imports: [
    MatCardModule,

    NgForOf,
    AsyncPipe,
    MatCheckboxModule,
    CommonModule,
    MatListModule
  ],
  declarations: [CategoriesListComponent],
  providers: [],
  exports: [CategoriesListComponent]
})
export class CategoriesListComponentModule {
}
