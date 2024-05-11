/*
    Title: sign-in.guard.ts
    Author: Phuong Tran
    Date: 05/03/2024
    Description: Exercise 7.2 - Reactive Forms.
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const sessionUser = this.cookieService.get('session_user');
    if(sessionUser) {
      return true;
    } else {
      // redirect to the sign-in page and return false
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }




}
