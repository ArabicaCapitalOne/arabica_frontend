import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'profile',
    styleUrls: ['./profile.component.css'],
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    private profile: any;
    constructor() {
        this.profile = JSON.parse(localStorage.getItem('profile'));
    }
    public ngOnInit() {
    }
}