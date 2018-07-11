import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { IMember } from './member';
import { MembersService } from './members.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'members-grid',
    templateUrl: './members-grid.component.html',
    styleUrls: ['./members-grid.component.css'],
    providers: [MembersService]
})

export class MembersGrid implements OnInit {

    title = 'Members listing';
    apiValues: string[] = [];

    public members: Observable<IMember[]>;

    private filteredFlights: IMember[] = [];
    private flights: IMember[] = [];

    _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredFlights = this.listFilter ? this.applyFilter(this.listFilter) : this.flights;
    }

    constructor(private _membersService: MembersService) {
        this.members = this._membersService.getMembers();
    }

    applyFilter(filterBy: string): IMember[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.flights.filter((member: IMember) =>
            member.serviceProvider.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string): void {
        this.title = message;
    }

    ngOnInit(): void {

        this.members = this._membersService.getMembers()

        console.log("number of members are : " + this.members.count);
        this.filteredFlights = this.flights;
    }
}