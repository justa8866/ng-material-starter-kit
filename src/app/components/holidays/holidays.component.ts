import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {HolidaysService} from "../../services/holidays.service";
import {HolidaysModel} from "../../models/holidays.model";

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidaysComponent {
  holidays$!: Observable<HolidaysModel[]>;

  constructor(private _holidaysService: HolidaysService) {}

  ngOnInit() {
    this.holidays$ = this._holidaysService.getAll();
  }
}
