import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {SingleCartService} from "../../services/single-cart.service";
import {SingleCartModel} from "../../models/single-cart.model";

@Component({
  selector: 'app-single-cart',
  templateUrl: './single-cart.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleCartComponent {
  constructor(private _ageService: SingleCartService, private _activatedRoute: ActivatedRoute) {}

  readonly product$: Observable<SingleCartModel> = this._activatedRoute.params.pipe(
    switchMap(param => this._ageService.getOne(param['id']))
  )
}
