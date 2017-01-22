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
    constructor(private capitalData: Data) {
        this.type = 'pie';
        this.options = {
            responsive: true,
            maintainAspectRatio: false
        };

        this.outcome = {
            labels: ["Bill", "Loan", "Credit Card"],
            datasets: [
                {
                    label: "This month record",
                    data: [1200, 500, 1100]
                }
            ]
        };
        this.income = {
            labels: ["Income", "Outcome"],
            datasets: [
                {
                    label: "This month record",
                    data: [5500, 2800]
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