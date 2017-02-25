import { Component, OnInit, HostListener } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { CapitalOne } from '../../_service'

@Component({
    selector: 'categorization',
    styleUrls: ['./categorization.component.css'],
    templateUrl: './categorization.component.html'
})
export class CategorizationComponent implements OnInit {
    purchases: Array<any> = [];
    categories: any;
    category: any = "Null";
    pointer: number = 0;
    purchase: any = {
        "_id": "",
        "merchant_id": "",
        "medium": "",
        "purchase_date": "",
        "amount": 0,
        "description": "",
        "status": "",
        "type": "",
        "payer_id": "",
        "payee_id": "",
        merchantInfo: {
            _id: "",
            address: { street_number: "", street_name: "", city: "", state: "", zip: "" },
            category: ["", ""],
            creation_date: "", geocode: { lat: 0, lng: 0 }, name: ""
        }
    };

    constructor(private capitalOne: CapitalOne, private af: AngularFire) {
        this.af.database.list('/categories', { query: {orderByChild: "name"} } ).subscribe(
            data => {
                this.categories = data;
            }
        );
    }

    ngOnInit() {
        this.capitalOne.getAccounts().subscribe(
            accounts => {
                for (let account of accounts) {
                    this.capitalOne.getPurchases(account._id).subscribe(
                        data => {
                            for (let p of data) {
                                this.capitalOne.getMerchants(p.merchant_id).subscribe(
                                    data => {
                                        p.merchantInfo = data;
                                        this.purchases.push(p);
                                        this.purchase = this.purchases[0];
                                   }
                                );
                            }
                        }
                    )
                }
            }
        );
    }

    @HostListener('document:keyup', ['$event'])
    doSomething(event: any) {
        switch (event.keyIdentifier) {
            case "Left":
                if (this.pointer <= 0) {
                    this.pointer = this.purchases.length - 1;
                } else {
                    this.pointer = this.pointer - 1;
                }
                this.purchase = this.purchases[this.pointer];
                break;
            case "Right":
                if (this.pointer >= this.purchases.length - 1) {
                    this.pointer = 0;
                } else {
                    this.pointer = this.pointer + 1;
                }
                this.purchase = this.purchases[this.pointer];
                break;
            case "Enter":
                console.log(this.category);
                this.capitalOne.updatePurchase(this.purchase._id, {
                    "description": this.category
                }).subscribe(
                    data => {
                        console.log(data);
                    },
                    err => {
                        console.log(`Error ${err}`);
                    });
                break;
            case "U+0048": // H
                this.category = "Housing";
                break;
            case "U+0054": // T
                this.category = "Tranportation";
                break;
            case "U+0044": // D
                this.category = "Debt";
                break;
            case "U+004F": // O
                this.category = "Other";
                break;
            case "U+0049": // I
            case "U+0053": // S
                this.category = "Investment & Saving";
                break;
            default:
                break;
        }
    }

    updateCategory(category: any, purchase: any) {
        let ref = this.af.database.list('/purchase_category', { query: {orderByChild:"purchaseID", equalTo:purchase._id } });
        console.log(ref);
        ref.update(purchase._id, {"category": category.name});
    }

    ngOnDestroy() {
        this.purchases = [];
    }
}