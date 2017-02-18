import {
    Component,
    OnInit
} from '@angular/core';
import { CapitalOne } from '../../_service'


@Component({
    selector: 'accounts',
    styleUrls: ['./accounts.component.css'],
    templateUrl: './accounts.component.html'
})
export class AccountsComponent implements OnInit {
    accounts: Array<any>;

    constructor(private capitalOne: CapitalOne) {}

    ngOnInit() {
        this.capitalOne.getAccounts().subscribe(
            data => {
                this.accounts = data;
            },
            err => {
                // print out the error
                console.log(err);
            }
        )
    }
}