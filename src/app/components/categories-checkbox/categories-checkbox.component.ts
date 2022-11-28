import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {CategoriesCheckboxModel} from "../../models/categories-checkbox.model";
import {CategoriesCheckboxService} from "../../services/categories-checkbox.service";

@Component({
  selector: 'app-categories-checkbox',
  templateUrl: './categories-checkbox.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesCheckboxComponent {
  category$!: Observable<CategoriesCheckboxModel[]>;

  constructor(private _categoriesCheckboxService: CategoriesCheckboxService) {}

  ngOnInit() {
    this.category$ = this._categoriesCheckboxService.getAll();
  }
}
