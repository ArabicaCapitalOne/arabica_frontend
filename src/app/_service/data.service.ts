import { Injectable }      from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {
    private apiUrl: string = '/capitalOne/personal';
    profile: any = JSON.parse(localStorage.getItem('profile'));
    constructor(private http: Http) {
    }

    getData(type: string) {
        let body = {
            "first_name": this.profile.given_name,
            "last_name": this.profile.family_name,
            "type": type
        };
        return this.http.post(this.apiUrl, body).map((res: Response) => res.json());
    }
}