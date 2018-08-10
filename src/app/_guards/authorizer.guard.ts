import { Injectable } from '@angular/core';
import {Router,CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
@Injectable()
export class AuthorizerGuard implements CanActivate{
    constructor(private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        if(route.params['pass'] =='arjun')
            return true;

        this.router.navigate(['/login/you are not authirized.plz login in form below'])
        return false;
    }
}