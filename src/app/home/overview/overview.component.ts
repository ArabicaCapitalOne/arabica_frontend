import {
  Component,
  OnInit
} from '@angular/core';
import { Auth } from '../../_service/index'


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
  constructor(private auth: Auth) {
    this.type = 'pie';
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40]
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

  private updateData(t: string) {
  }
}