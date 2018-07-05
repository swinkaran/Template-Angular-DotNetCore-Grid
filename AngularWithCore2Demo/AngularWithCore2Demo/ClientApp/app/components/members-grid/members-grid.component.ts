import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'members-grid',
    templateUrl: './members-grid.component.html',
    styleUrls: ['./members-grid.component.css']
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
    }

    //filteredFlights:
        flights: any[] =[

            {
                "flightId": 1,
                "flightNo": "qf1",
                "serviceProvider": "Qantas",
                "startTime": "10:30 AM",
                "endTime": "11:15 AM",
                "passengerCapacity": 4,
                "cost": "59.00",
                "departureCity": "Melbourne",
                "arrivalCity": "Sydney",
                "flightClass": "Gold",
                "flightRating": "4"
            },
            {
                "flightId": 2,
                "flightNo": "qf12",
                "serviceProvider": "JetAir",
                "startTime": "10:45 AM",
                "endTime": "11:35 AM",
                "passengerCapacity": 6,
                "cost": "74.00",
                "departureCity": "Melbourne",
                "arrivalCity": "Canberra",
                "flightClass": "Gold",
                "flightRating": "3"
            },
            {
                "flightId": 3,
                "flightNo": "qf24",
                "serviceProvider": "JetAir",
                "startTime": "02:30 PM",
                "endTime": "03:25 PM",
                "passengerCapacity": 6,
                "cost": "124.00",
                "departureCity": "Sydney",
                "arrivalCity": "Darwin",
                "flightClass": "Silver",
                "flightRating": "4"
            },
            {
                "flightId": 4,
                "flightNo": "qf31",
                "serviceProvider": "JetAir",
                "startTime": "04:30 PM",
                "endTime": "05:30 PM",
                "passengerCapacity": 4,
                "cost": "81.50",
                "departureCity": "Brisbane",
                "arrivalCity": "Canberra",
                "flightClass": "Silver",
                "flightRating": "3"
            },
            {
                "flightId": 5,
                "flightNo": "jt115",
                "serviceProvider": "JetAir",
                "startTime": "04:10 PM",
                "endTime": "06:40 PM",
                "passengerCapacity": 8,
                "cost": "172.00",
                "departureCity": "Perth",
                "arrivalCity": "Canberra",
                "flightClass": "Silver",
                "flightRating": "3"
            },
            {
                "flightId": 6,
                "flightNo": "vr105",
                "serviceProvider": "Virgin",
                "startTime": "04:30 PM",
                "endTime": "05:30 PM",
                "passengerCapacity": 4,
                "cost": "79.00",
                "departureCity": "Brisbane",
                "arrivalCity": "Canberra",
                "flightClass": "Silver",
                "flightRating": "3"
            }
        ];

    constructor(private _httpService: Http) { }

    ngOnInit() {
        //this._httpService.get('http://localhost:57033/api/Flights').subscribe(values => )
    }
}