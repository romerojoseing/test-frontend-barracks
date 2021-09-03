/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedAdminModule } from 'src/app/shared/shared-admin.module';

/* ---------- Components ---------- */
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  },
]

@NgModule({
  declarations: [LoginComponent, LogoutComponent, AuthComponent],
  imports: [
    CommonModule,
    SharedAdminModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
