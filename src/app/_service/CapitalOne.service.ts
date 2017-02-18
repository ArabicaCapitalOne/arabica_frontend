import { Injectable }      from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class CapitalOne {
    constructor(private http: Http) {}

    private customerID = "5882c2c51756fc834d8eb658";
    private apiUrl = "http://api.reimaginebanking.com"; 
    private APIKey = "df8a613cd6635b6513d8050b63b13dde";


    public getAccounts (id: string = this.customerID) {
        let getAccountsUrl = `${this.apiUrl}/customers/${id}/accounts?key=${this.APIKey}`;
        return this.http.get(getAccountsUrl).map((res: Response) => res.json());
    }

    public getBills (id: string = this.customerID) {
        let getBillsUrl = `${this.apiUrl}/customers/${id}/bills?key=${this.APIKey}`;
        return this.http.get(getBillsUrl).map((res: Response) => res.json());
    }

    public getLoans (accountID: string) {
        let getBillsUrl = `${this.apiUrl}/accounts/${accountID}/loans?key=${this.APIKey}`;
        return this.http.get(getBillsUrl).map((res: Response) => res.json());
    }

    public getPurchases (accountID: string) {
        let getPurchasesUrl = `${this.apiUrl}/accounts/${accountID}/purchases?key=${this.APIKey}`;
        return this.http.get(getPurchasesUrl).map((res: Response) => res.json());
    }
}