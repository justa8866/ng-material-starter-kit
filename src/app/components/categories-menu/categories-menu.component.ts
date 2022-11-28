import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {CategoriesMenuModel} from "../../models/categories-menu.model";
import {CategoriesMenuService} from "../../services/categories-menu.service";

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesMenuComponent {
  category$!: Observable<CategoriesMenuModel[]>;

  constructor(private _categoriesMenuService: CategoriesMenuService) {}

  ngOnInit() {
    this.category$ = this._categoriesMenuService.getAll();
  }
}

