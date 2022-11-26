import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {DogModel} from "../../models/dog.model";
import {DogService} from "../../services/dog.service";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogComponent {
  dog$!: Observable<DogModel>;

  constructor(private _dogService: DogService) {}

  ngOnInit() {
    this.dog$ = this._dogService.getOne();
  }
}
