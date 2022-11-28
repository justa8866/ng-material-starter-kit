import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExtendProductService } from '../../services/extend-product.service';
import { CategoriesListModel } from '../../models/categories-list.model';
import { Observable } from 'rxjs';
import { CategoriesListService } from '../../services/categories-list.service';

@Component({
  selector: 'app-extend-product',
  templateUrl: './extend-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExtendProductComponent {
  readonly product: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl(),
  });

  category$!: Observable<CategoriesListModel[]>;

  constructor(
    private _extendProductService: ExtendProductService,
    private _categoriesListService: CategoriesListService
  ) {}

  ngOnInit() {
    this.category$ = this._categoriesListService.getAll();
  }

  onProductSubmitted(product: FormGroup): void {
    this._extendProductService
      .create({
        title: product.get('title')?.value,
        price: product.get('price')?.value,
        description: product.get('description')?.value,
        image: product.get('image')?.value,
        category: product.get('category')?.value,
      })
      .subscribe();
  }
}
