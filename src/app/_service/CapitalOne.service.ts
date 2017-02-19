import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class CapitalOne {
    constructor(private http: Http) { }

    private customerID = "58a9a8c21756fc834d905ae9";
    private apiUrl = "http://api.reimaginebanking.com";
    private APIKey = "df8a613cd6635b6513d8050b63b13dde";


    public getAccounts(id: string = this.customerID) {
        let getAccountsUrl = `${this.apiUrl}/customers/${id}/accounts?key=${this.APIKey}`;
        return this.http.get(getAccountsUrl).map((res: Response) => res.json());
    }

    public getBills(id: string = this.customerID) {
        let getBillsUrl = `${this.apiUrl}/customers/${id}/bills?key=${this.APIKey}`;
        return this.http.get(getBillsUrl).map((res: Response) => res.json());
    }

    public getLoans(accountID: string) {
        let getBillsUrl = `${this.apiUrl}/accounts/${accountID}/loans?key=${this.APIKey}`;
        return this.http.get(getBillsUrl).map((res: Response) => res.json());
    }

    public getPurchases(accountID: string) {
        let getPurchasesUrl = `${this.apiUrl}/accounts/${accountID}/purchases?key=${this.APIKey}`;
        return this.http.get(getPurchasesUrl).map((res: Response) => res.json());
    }

    public getMerchants(merchantID: string) {
        let getMerchantsUrl = `${this.apiUrl}/merchants/${merchantID}/?key=${this.APIKey}`;
        return this.http.get(getMerchantsUrl).map((res: Response) => res.json());
    }
    /**
     *   "payer_id": "string",
     *   "medium": "balance",
     *   "amount": 0.01,
     *   "description": "string"
     */
    public updatePurchase(purchaseID: string, body: any) {
        let updatePurchaseUrl = `${this.apiUrl}/purchases/${purchaseID}?key=${this.APIKey}`;
        return this.http.put(updatePurchaseUrl, body).map((res: Response) => res.json());
    }
}