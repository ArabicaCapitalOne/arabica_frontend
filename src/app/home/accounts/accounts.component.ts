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
            "nickname": "Daily Used Card",
            "rewards": 1000,
            "balance": 786,
            "account_number": "21010519961118401139",
            "customer_id": "588498611756fc834d8fbd77"
        },
        {
            "_id": "588498a71756fc834d8fbd79",
            "type": "Credit Card",
            "nickname": "Card to Pay Bills",
            "rewards": 5000,
            "balance": 3952,
            "account_number": "6466960027949935",
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