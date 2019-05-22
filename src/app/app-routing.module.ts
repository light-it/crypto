import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './auth/shared/services/login.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [
      LoginGuard
    ]
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
