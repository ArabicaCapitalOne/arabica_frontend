import {
    Component,
    OnInit
} from '@angular/core';
import { Data } from '../../_service'


@Component({
    selector: 'accounts',
    styleUrls: ['./accounts.component.css'],
    templateUrl: './accounts.component.html'
})
export class AccountsComponent implements OnInit {
    accounts: Array<any>;
    constructor(private backendData: Data) {
        this.accounts = [{
            "type": "Credit Card",
            "nickname": "string",
            "rewards": 1200,
            "balance": 3000,
            "account_number": "1111111111111111"
        }];
    }
    ngOnInit() {
        this.backendData.getData("accounts").subscribe(
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