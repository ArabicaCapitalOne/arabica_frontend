import {
    Component,
    OnInit
} from '@angular/core';
import { CapitalOne } from '../../_service'

@Component({
    selector: 'overview', 
    styleUrls: ['./overview.component.css'],
    templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
    profile: any;
    isIncome: boolean; // if it is income vs outcome, then it is true

    private contentType = "Chart";
    private billTotal: Number;
    private loanTotal: Number;
    private purchaseTotal: Number;

    private type: any;
    private income: any;
    private outcome: any;
    private options: any;

    private accounts: any;

    public kind: any = "Bill";
    details: any;
    // mock data
  
    constructor(private capitalOne: CapitalOne) {
        this.type = 'pie';
        this.options = {
            responsive: true,
            maintainAspectRatio: false
        };

        this.capitalOne.getAccounts().subscribe(
            data => {
                this.accounts = data;
            }
        );

        this.outcome = {
            labels: ["Bill", "Loan", "Purchase"],
            datasets: [
                {
                    label: "Jan 2017",
                    data: [this.billTotal, this.loanTotal, this.purchaseTotal]
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

    ngOnInit() {
        this.capitalOne.getBills().subscribe(
            data => {
                for (let bill of data) {
                    this.billTotal += bill.payment_amount;
                }
            },
            err => {
                console.log(err);
            }
        );

        for (let account of this.accounts) {
            this.capitalOne.getLoans(account._id).subscribe(
                data => {
                    for (let bill of data) {
                        this.billTotal += bill.payment_amount;
                    }
                },
                err => {
                    console.log(err);
                }
            );

            this.capitalOne.getPurchases(account._id).subscribe(
                data => {
                    for (let purchase of data) {
                        this.purchaseTotal += purchase.amount;
                    }
                }
            )
        }
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
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    private hasAccount(): boolean {
        return true;
    }

    public switchContent(type: string): void {
        this.contentType = type;
    }
}