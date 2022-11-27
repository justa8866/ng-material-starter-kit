import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {Observable} from "rxjs";

import {AllProductsService} from "../../services/all-products.service";
import {AllProductsModel} from "../../models/all-products.model";



@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllProductsComponent {
  all$!: Observable<AllProductsModel[]>;

  constructor(private _allProductService: AllProductsService) {}

  ngOnInit() {
    this.all$ = this._allProductService.getAll();
  }
}

