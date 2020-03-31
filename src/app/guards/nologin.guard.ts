import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators'
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {
  
  constructor (private Fauth:AngularFireAuth,
    private router:Router) {}
    
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.Fauth.authState.pipe(map (res =>{
      if(isNullOrUndefined(res)){
        return true
      }
      this.router.navigate(['/tabs/tab1'])
      return true
    }))
  }
  
}
