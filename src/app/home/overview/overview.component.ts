import {
    Component,
    OnInit
} from '@angular/core';
import { Data } from '../../_service'

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'overview',  // <home></home>
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: ['./overview.component.css'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
    profile: any;
    isIncome: boolean; // if it is income vs outcome, then it is true

    private type: any;
    private income: any;
    private outcome: any;
    private options: any;

    public kind: any = "Bill";
    details: any;
    // mock data
    detailsBill: Array<any> = [
        {
            "_id": "58849b791756fc834d8fbd7c",
            "status": "pending",
            "payee": "string",
            "nickname": "string",
            "payment_date": "2017-01-22",
            "recurring_date": 1,
            "payment_amount": 0.01,
            "creation_date": "2017-01-22",
            "account_id": "588498a71756fc834d8fbd79"
        },
        {
            "_id": "5884abb21756fc834d8fbd90",
            "status": "completed",
            "payee": "boilermake",
            "nickname": "string",
            "payment_date": "2017-01-22",
            "recurring_date": 1,
            "payment_amount": 100,
            "creation_date": "2017-01-22",
            "account_id": "588498891756fc834d8fbd78"
        },
        {
            "_id": "5884ac121756fc834d8fbd91",
            "status": "cancelled",
            "payee": "boilermake",
            "nickname": "string",
            "payment_date": "2017-01-22",
            "recurring_date": 1,
            "payment_amount": 12345,
            "creation_date": "2017-01-22",
            "account_id": "588498891756fc834d8fbd78"
        },
        {
            "_id": "5884ac371756fc834d8fbd92",
            "status": "recurring",
            "payee": "purduehackers",
            "nickname": "string",
            "payment_date": "2017-01-22",
            "recurring_date": 1,
            "payment_amount": 23.56,
            "creation_date": "2017-01-22",
            "account_id": "588498891756fc834d8fbd78"
        },
        {
            "_id": "5884ac4d1756fc834d8fbd93",
            "status": "completed",
            "payee": "purduehackers",
            "nickname": "string",
            "payment_date": "2017-01-22",
            "recurring_date": 1,
            "payment_amount": 6.99,
            "creation_date": "2017-01-22",
            "account_id": "588498891756fc834d8fbd78"
        }
    ];
    constructor(private capitalData: Data) {
        this.type = 'pie';
        this.options = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.details = this.detailsBill;

        this.outcome = {
            labels: ["Bill", "Loan", "Credit Card", "Debit Card"],
            datasets: [
                {
                    label: "Jan 2017",
                    data: [1200, 500, 1100, 300]
                },
                {
                    label: "Dec 2016",
                    data: [1100, 500, 783, 0]
                },
                {
                    label: "Nov 2016",
                    data: [1200, 700, 983, 500]
                }
            ]
        };
        this.income = {
            labels: ["Income", "Outcome"],
            datasets: [
                {
                    label: "Jan 2017",
                    data: [5500, 3100]
                },
                {
                    label: "Dec 2016",
                    data: [5500, 2383]
                },
                {
                    label: "Nov 2016",
                    data: [4500, 3383]
                }
            ]
        };
    }

    public ngOnInit() {
        this.capitalData.getData("allInfom").subscribe(
            data => {
                this.outcome.datasets[0].data[0] = data.Bill;
                this.outcome.datasets[0].data[1] = data.Loan;
                this.outcome.datasets[0].data[2] = data.CreditCard;
                this.outcome.datasets[0].data[3] = data.DebitCard;

                this.income.datasets[0].data[0] = data.Deposit;
                this.income.datasets[0].data[1] = data.Bill + data.Loan + data.CreditCard;
            },
            err => {
                console.log(err);
            }
        )
    }

    private updateType(t: string) {
        console.log("checking:" + t);
        this.type = t;
    }

    private switchChart() {
        this.isIncome = !this.isIncome;
    }

    private changeKind(kind: any) {
        this.kind = kind;
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    private hasAccount(): boolean {
        return true;
    }
}