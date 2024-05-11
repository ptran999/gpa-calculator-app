/*
    Title: app-routing.module.ts
    Author: Phuong Tran
    Date: 05/03/2024
    Description: Exercise 7.2 - Reactive Forms.
*/
// all imports for this module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent,
    children: [
      {path: '', component: HomeComponent}
    ],
    canActivate: [
      SignInGuard
    ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [

      // routing any addresses that are not valid
      {path: 'not-found', component: NotFoundComponent},

      // route users to the sign-in
      {path: 'sign-in', component: SignInComponent}
    ]
  },

  // routing any addresses that are not valid
  {path: '**', redirectTo: 'session/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
