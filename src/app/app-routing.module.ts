import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeFormServiceModule } from './services/employee-form.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-employee', component: EmployeeFormComponent },
    ]),
    EmployeeFormComponentModule,
    EmployeeFormServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
