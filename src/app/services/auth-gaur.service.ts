import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGaurService implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate() {
    if (sessionStorage.getItem('Token') == 'null' || sessionStorage.getItem('Token') === null) {
      this.router.navigate(['/account/login']);
      return false;
    } else {
      return true;
    }

  }
}
