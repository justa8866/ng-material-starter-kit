import { NgModule } from '@angular/core';
import { SingleUserComponent } from './single-user.component';
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    NgIf,
    AsyncPipe
  ],
  declarations: [SingleUserComponent],
  providers: [],
  exports: [SingleUserComponent]
})
export class SingleUserComponentModule {
}
