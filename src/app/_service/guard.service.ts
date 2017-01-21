import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'; 
import { Auth } from './index';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private authService: Auth) { }
    
    canActivate(): boolean {
        return this.authService.authenticated();
    }
}