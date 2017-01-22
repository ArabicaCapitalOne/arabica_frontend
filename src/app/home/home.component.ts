import {
  Component,
  OnInit
} from '@angular/core';
import { Auth } from '../_service/index'


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // Our list of styles in our component. We may add more to compose many styles together
//   styleUrls: ['./home.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    private profile: any = {
        name: "unknown",
        gender: "unknown",
        email: "unknown",
        picture: "http://babyinfoforyou.com/wp-content/uploads/2014/10/avatar-300x300.png"
    }
    constructor(private auth: Auth) {
    }
    public ngOnInit() {
        const token = localStorage.getItem('id_token');
        this.auth.lock.getProfile(token, (err, profile) => {
            if (err) {
                // handle error
                console.log(err);
                return;
            }
            localStorage.setItem('profile', JSON.stringify(profile));
            this.profile = profile;
        });
    }
}
