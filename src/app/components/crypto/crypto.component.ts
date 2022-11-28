import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {CryptoService} from "../../services/crypto.service";
import {CryptoModel} from "../../models/crypto.model";

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoComponent {
  crypto$!: Observable<CryptoModel[]>;

  constructor(private _cryptoService: CryptoService) {}

  ngOnInit() {
    this.crypto$ = this._cryptoService.getAll();
  }
}

