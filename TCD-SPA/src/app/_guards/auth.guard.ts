import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private userService: UserService) {}

  canActivate(): boolean {
    if(this.userService.loggedIn())
      return true;
      console.log("You should no pass")
      return false;
  }
  
}
