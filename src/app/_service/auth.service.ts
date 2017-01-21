import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import Auth0Lock from "auth0-lock";

@Injectable()
export class Auth {
  // Configure Auth0
  public lock = new Auth0Lock('NFGRPL9EEVGJ03KBJj4gzeOBC7zQDp0C', 'guocheng.auth0.com', {
    auth: {
      redirectUrl: 'http://localhost:3000/home',
      responseType: 'token',
      sso: false
    },
    theme: {
      logo: '../../assets/img/arabica.png',
      primaryColor: '#3A99D8'
    },
    languageDictionary: {
      title: ''
    }
  });

  constructor(private router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", authResult => {
      console.log(authResult);
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    this.router.navigate(['/about']);
  }
}