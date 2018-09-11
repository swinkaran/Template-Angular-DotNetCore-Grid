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

    // Members and properties
    title = 'User managment listing';
    apiValues: string[] = [];
    flightsCount = 0;

    public flights$: IMember[];
    private filteredFlights$: IMember[] = [];
    filterString: string = '';

    get listFilter(): string {
        return this.filterString;
    }
    set listFilter(value: string) {
        this.filterString = value;
        this.filteredFlights$ = this.listFilter ? this.applyFilter(this.listFilter) : this.flights$;
    }

    // Constructor
    constructor(private _membersService: MembersService) {
        this.filteredFlights$ = this.flights$;
        this.filterString = '';
    }

    //Methods
    applyFilter(filterBy: string): IMember[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.flights$.filter((f: IMember) =>
            f.flightNo.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    // Event methods
    onRatingClicked(message: string): void {
        this.title = message;
    }

    public ngOnInit() {

        this._membersService.fetchUsers().subscribe((_flights: IMember[]) => {
            this.flights$ = _flights;
            this.flightsCount = _flights.length;
            
        });
    }
}