import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, switchMap} from "rxjs";
import {AgeModel} from "../../models/age.model";
import {AgeService} from "../../services/age.service";

@Component({
  selector: 'app-age-prediction',
  styleUrls: ['./age-prediction.component.scss'],
  templateUrl: './age-prediction.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgePredictionComponent {

  constructor(private _ageService: AgeService, private _activatedRoute: ActivatedRoute) {}

  readonly age$: Observable<AgeModel> = this._activatedRoute.params.pipe(
    switchMap(param => this._ageService.getOne(param['name']))
  )
}
