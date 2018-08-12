import { Injectable } from "@angular/core";
import { IMember } from "./member";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class MembersService {
    private _membersUrl = 'http://localhost:55727/api/members';

    constructor(private _http: Http) {
    }

    public fetchUsers() {
        return this._http.get("http://localhost:55727/api/members").map((res: Response) => res.json())
    }

    public getMembers(): Observable<IMember[]> {
        return this._http.get("http://localhost:55727/api/members").map((res: Response) => <IMember[]>res.json());
    }
}