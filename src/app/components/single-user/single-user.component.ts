import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {SingleUserModel} from "../../models/single-user.model";
import {SingleUserService} from "../../services/single-user.service";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleUserComponent {
  constructor(private _singleUserService: SingleUserService, private _activatedRoute: ActivatedRoute) {
  }

  readonly user$: Observable<SingleUserModel> = this._activatedRoute.params.pipe(
    switchMap(param => this._singleUserService.getOne(param['id']))
  )
}
