import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {SingleProductService} from "../../services/single-product.service";
import {SingleProductModel} from "../../models/single-product.model";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProductComponent {
  constructor(private _ageService: SingleProductService, private _activatedRoute: ActivatedRoute) {}

  readonly product$: Observable<SingleProductModel> = this._activatedRoute.params.pipe(
    switchMap(param => this._ageService.getOne(param['id']))
  )
}
