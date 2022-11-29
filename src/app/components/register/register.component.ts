import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  readonly register: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    zipcode: new FormControl(),
    phone: new FormControl(),
  });

  constructor(private _registerService: RegisterService) {}

  onRegisterSubmitted(register: FormGroup): void {
    this._registerService
      .create({
        email: register.get('email')?.value,
        username: register.get('username')?.value,
        password: register.get('password')?.value,
        name: {
          firstname: register.get('firstname')?.value,
          lastname: register.get('lastname')?.value,
        },
        address: {
          city: register.get('city')?.value,
          street: register.get('street')?.value,
          number: register.get('number')?.value,
          zipcode: register.get('zipcode')?.value,
          geolocation: {
            lat: '',
            long: '',
          },
        },
        phone: register.get('phone')?.value,
      })
      .subscribe();
  }
}
