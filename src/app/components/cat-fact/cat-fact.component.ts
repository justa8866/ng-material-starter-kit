import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { CatService } from '../../services/cat.service';
import { Observable } from 'rxjs';
import { CatModel } from '../../models/cat.model';

@Component({
  selector: 'app-cat-fact',
  styleUrls: ['./cat-fact.component.scss'],
  templateUrl: './cat-fact.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatFactComponent {
  cat$!: Observable<CatModel>;

  constructor(private _catService: CatService) {}

  ngOnInit() {
    this.cat$ = this._catService.getOne();
  }
}
