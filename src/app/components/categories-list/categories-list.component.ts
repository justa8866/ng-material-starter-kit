import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {CategoriesListService} from "../../services/categories-list.service";
import {CategoriesListModel} from "../../models/categories-list.model";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent {
  category$!: Observable<CategoriesListModel[]>;

  constructor(private _categoriesListService: CategoriesListService) {}

  ngOnInit() {
    this.category$ = this._categoriesListService.getAll();
  }
}
