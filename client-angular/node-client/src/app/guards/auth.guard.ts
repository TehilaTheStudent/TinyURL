import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { RoleEnum } from "../models/role.enum";


@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{
constructor(private authService:AuthService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
     // debugger
        if(this.authService.isAdmin()&& route.data['role']==RoleEnum.admin){
            return true;
        }
        else if(this.authService.isUser()&& route.data['role']==RoleEnum.user){
            return true;
        }
        //TODO redirect here
        return false;
    }

}