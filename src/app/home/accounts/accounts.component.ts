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
    mockAccounts: any = [
        {
            "_id": "588498891756fc834d8fbd78",
            "type": "Credit Card",
            "nickname": "string",
            "rewards": 0,
            "balance": 0,
            "account_number": "0000000000000000",
            "customer_id": "588498611756fc834d8fbd77"
        },
        {
            "_id": "588498a71756fc834d8fbd79",
            "type": "Credit Card",
            "nickname": "string",
            "rewards": 0,
            "balance": 0,
            "account_number": "1111111111111111",
            "customer_id": "588498611756fc834d8fbd77"
        }
    ];
    constructor(private backendData: Data) {
        // mock data
        this.accounts = this.mockAccounts;
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