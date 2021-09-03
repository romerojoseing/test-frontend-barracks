/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    NgbModule
  ],
  exports: [
    FormsModule,
    NgbModule
  ],
  declarations: [],
})

export class SharedAdminModule { }