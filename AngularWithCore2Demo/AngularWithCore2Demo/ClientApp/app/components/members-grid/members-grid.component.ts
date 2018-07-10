import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { IMember } from './member';
import { MembersService } from './members.service';

@Component({
    selector: 'members-grid',
    templateUrl: './members-grid.component.html',
    styleUrls: ['./members-grid.component.css'],
    providers: [MembersService]
})

export class MembersGrid implements OnInit {

    title = 'Members listing';
    apiValues: string[] = [];

    _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredFlights = this.listFilter ? this.applyFilter(this.listFilter) : this.flights;
    }

    filteredFlights: IMember[];
    flights: IMember[];


    constructor(private _membersService: MembersService) {
        
    constructor(private _httpService: Http) {
        this.filteredFlights = this.flights;
        this.listFilter = '';

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
        this.flights = this._membersService.getMembers();
        this.filteredFlights = this.flights;
    }

}