/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import { Routes, RouterModule } from '@angular/router';

/* ---------- Components ---------- */
import { BaseComponent } from './components/layout/base/base.component';
import { ErrorsComponent } from './components/errors/errors.component';

/* ---------- Services ---------- */
import { AuthGaurService } from './services/auth-gaur.service';

const routes: Routes = [
  { path:'account', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'account',
    component: BaseComponent,
    canActivate: [AuthGaurService],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
      {
        path: 'error',
        component: ErrorsComponent
      },
      {
        path: 'error/:type',
        component: ErrorsComponent
      },
      { path: '**', redirectTo: 'error', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'account/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
