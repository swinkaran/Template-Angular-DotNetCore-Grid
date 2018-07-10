import { Injectable } from "@angular/core";
import { IMember } from "./member";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MembersService {
    private _membersUrl = '.\members.json';

    constructor(private _http: Http) {

    }

    getMembers(): Observable<IMember[]> {
        return this._http.get < IMember[]>(this._membersUrl);
    }
}