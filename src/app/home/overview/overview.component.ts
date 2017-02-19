import {
    Component,
    OnInit,
    HostListener
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
    private billTotal: Number = 0;
    private loanTotal: Number = 0;
    private purchaseTotal: Number = 0;

    private type: any;
    private outcome: {
        labels: Array<string>,
        datasets: Array<{
            label: string,
            data: Array<Number>
        }>
    };
    private income: {
        labels: Array<string>,
        datasets: Array<{
            label: string,
            data: Array<Number>
        }>
    };
    private options: any;

    public kind: any = "Bill";
    public bills: Array<any>;
    public loans: Array<any>;
    public purchases: Array<any>;

    // mock data

    constructor(private capitalOne: CapitalOne) {
        this.type = 'pie';
        this.options = {
            responsive: true,
            maintainAspectRatio: false
        };
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
                }
            ]
        };
    }

    ngOnInit() {
        this.capitalOne.getBills().subscribe(
            data => {
                this.bills = data;
                for (let bill of data) {
                    this.billTotal += bill.payment_amount;
                }

                this.capitalOne.getAccounts().subscribe(
                    data => {
                        for (let account of data) {
                            this.capitalOne.getLoans(account._id).subscribe(
                                data => {
                                    this.loans = data;
                                    for (let loan of data) {
                                        this.loanTotal += loan.monthly_payment;
                                    }
                                    this.capitalOne.getPurchases(account._id).subscribe(
                                        data => {
                                            this.purchases = data;
                                            for (let purchase of data) {
                                                this.purchaseTotal += purchase.amount;
                                            }
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
                                    )
                                },
                                err => {
                                    console.log(err);
                                }
                            );
                        }
                    }
                );
            },
            err => {
                console.log(err);
            }
        );

    }

    private updateType(t: string) {
        console.log("checking:" + t);
        this.type = t;
    }

    private switchChart() {
        this.isIncome = !this.isIncome;
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

    @HostListener('document:keyup', ['$event'])
    doSomething(event: any) {
        let financeType = ["Bill", "Loan", "Purchase"];
        let index = financeType.indexOf(this.kind);
        if (event.keyIdentifier === 'Left') {
            index--;
            if (index < 0) { index = financeType.length - 1; }
        } else if (event.keyIdentifier === 'Right') {
            index++;
            if (index > financeType.length - 1) { index = 0; }
        }
        this.kind = financeType[index];
    }
}