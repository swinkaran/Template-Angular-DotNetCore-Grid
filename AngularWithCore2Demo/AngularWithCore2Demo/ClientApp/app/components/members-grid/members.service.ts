import { Injectable } from "@angular/core";
import { IMember } from "./member";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class MembersService {
    private _membersUrl = './members.json';

    constructor(private _http: Http) {
    }

    public getMembers(): Observable<IMember[]> {
        return this._http.get(this._membersUrl).map((res: Response) => <IMember[]>res.json());
    }
}