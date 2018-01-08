import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthorizeService} from "./services/authorize.service";
import decode from 'jwt-decode';

@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private authorizeService: AuthorizeService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if (this.authorizeService.getUserLoggedIn()){
          return true;
      }
      this.router.navigate(['/']);
      console.log('You are not authenticated');
      return false;
/*
     // this will be passed from the route config
     // on the data property
     const expectedRole = next.data.expectedRole;
     const token = localStorage.getItem('token');
     // decode the token to get its payload
     const tokenPayload = decode(token);
     if (
         !this.authorizeService.isAuthenticated() ||
         tokenPayload.role !== expectedRole
     ) {
         this.router.navigate(['login']);
         return false;
     }
     return true;*/
 }

}
