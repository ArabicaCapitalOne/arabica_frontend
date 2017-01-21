import {
    Component,
    OnInit
} from '@angular/core';
import { Auth } from '../../_service/index'


@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'profile',  // <home></home>
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: ['./profile.component.css'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    private profile: any;
    constructor(private auth: Auth) {
        const token = localStorage.getItem('id_token');
        console.log(token);
        this.auth.lock.getProfile(token, (err, profile) => {
            if (err) {
                // handle error
                console.log(err);
                return;
            }

            console.log(profile);
            this.profile = profile;
        });
    }
    public ngOnInit() { }
}