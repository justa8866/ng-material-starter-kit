import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { AllProductsComponent } from './all-products.component';
import { AllProductsService } from '../../services/all-products.service';
import { AllProductsModel } from '../../models/all-products.model';
import {AsyncPipe, CommonModule, NgForOf} from "@angular/common";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [MatCardModule, NgForOf, AsyncPipe, CommonModule, MatListModule],
  declarations: [AllProductsComponent],
  providers: [],
  exports: [AllProductsComponent]
})
export class AllProductsComponentModule {
  constructor(private _allProductsService: AllProductsService) { }

  allProducts$: Observable<AllProductsModel[]> = this._allProductsService.getAll();

}
