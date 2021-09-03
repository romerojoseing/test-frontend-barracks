/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* ---------- Components ---------- */
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [ ]
})
export class LayoutModule { }
