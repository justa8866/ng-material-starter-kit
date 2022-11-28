import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoginServiceModule } from './services/login.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: 'login', component: LoginComponent }]),
    LoginComponentModule,
    LoginServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
