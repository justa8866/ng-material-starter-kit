import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {ProductTableModel} from "../../models/product-table.model";
import {ProductTableService} from "../../services/product-table.service";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent {
  all$!: Observable<ProductTableModel[]>;

  constructor(private _productService: ProductTableService) {}

  ngOnInit() {
    this.all$ = this._productService.getAll();
  }
}


