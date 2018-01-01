import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthorizeService} from "./services/authorize.service";

@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private authorizeService: AuthorizeService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      this.router.navigate(['/']);
      console.log('You are not authenticated');
      return this.authorizeService.getUserLoggedIn();
  }
}
