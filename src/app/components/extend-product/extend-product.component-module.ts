import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ExtendProductComponent } from './extend-product.component';
import { MatSelectModule } from '@angular/material/select';
import { CategoriesListServiceModule } from '../../services/categories-list.service-module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CommonModule,
    CategoriesListServiceModule,
  ],
  declarations: [ExtendProductComponent],
  providers: [],
  exports: [ExtendProductComponent],
})
export class ExtendProductComponentModule {}
