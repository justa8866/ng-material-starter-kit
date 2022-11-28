import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeFormService } from '../../services/employee-form.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    salary: new FormControl(),
    age: new FormControl(),
  });

  constructor(private _employeeFormService: EmployeeFormService) {}

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._employeeFormService
      .create({
        name: employeeForm.get('name')?.value,
        salary: employeeForm.get('salary')?.value,
        age: employeeForm.get('age')?.value,
      })
      .subscribe();
  }
}
