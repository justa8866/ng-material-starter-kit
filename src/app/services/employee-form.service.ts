import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeFormModel, IData } from '../models/employee-form.model';
import {
  AbstractControl,
  ɵFormGroupRawValue,
  ɵGetProperty,
  ɵTypedOrUntyped,
} from '@angular/forms';

@Injectable()
export class EmployeeFormService {
  constructor(private _httpClient: HttpClient) {}

  create(employee: {
    name: AbstractControl<
      ɵGetProperty<ɵTypedOrUntyped<any, ɵFormGroupRawValue<any>, any>, 'name'>
    > | null;
    salary: AbstractControl<
      ɵGetProperty<ɵTypedOrUntyped<any, ɵFormGroupRawValue<any>, any>, 'salary'>
    > | null;
    age: AbstractControl<
      ɵGetProperty<ɵTypedOrUntyped<any, ɵFormGroupRawValue<any>, any>, 'age'>
    > | null;
  }): Observable<EmployeeFormModel> {
    return this._httpClient.post<EmployeeFormModel>(
      '	https://dummy.restapiexample.com/api/v1/create',
      employee
    );
  }
}
