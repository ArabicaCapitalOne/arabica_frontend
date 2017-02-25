/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(public af: AngularFire) { }

  public ngOnInit() {
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    })
    .then((success) => {
      console.log("Firebase success: " + JSON.stringify(success));
    })
    .catch((error) => {
      console.log("Firebase failure: " + JSON.stringify(error));
    });
  }

  logout() {
    this.af.auth.logout();
  }

}
