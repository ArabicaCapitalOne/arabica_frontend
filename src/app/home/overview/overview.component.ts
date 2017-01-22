import {
  Component,
  OnInit
} from '@angular/core';

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

  private type: any;
  private data: any;
  private options: any;
  constructor() {
    this.type = 'pie';
    this.data = {
      labels: ["Bill", "Loan", "Credit Card", "Debit Card"],
      datasets: [
        {
          label: "This month record",
          data: [3000, 500, 4000, 5000]
        }
      ]
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false
    };
  }

  public ngOnInit() {
  }

  private updateType(t: string) {
    console.log("checking:" + t);
    this.type = t;
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