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
    flights: any[] = [

        {
            "flightId": 1,
            "flightNo": "QF1",
            "startTime": "10:30 AM",
            "endTime": "11:15 AM",
            "passengerCapacity": 4,
            "departureCity": "Melbourne",
            "arrivalCity": "Sydney"
        },
        {
            "flightId": 2,
            "flightNo": "QF12",
            "startTime": "10:45 AM",
            "endTime": "11:35 AM",
            "passengerCapacity": 6,
            "departureCity": "Melbourne",
            "arrivalCity": "Canberra"
        },
        {
            "flightId": 3,
            "flightNo": "QF24",
            "startTime": "02:30 PM",
            "endTime": "03:25 PM",
            "passengerCapacity": 6,
            "departureCity": "Sydney",
            "arrivalCity": "Darwin"
        },
        {
            "flightId": 4,
            "flightNo": "QF31",
            "startTime": "04:30 PM",
            "endTime": "05:30 PM",
            "passengerCapacity": 4,
            "departureCity": "Brisbane",
            "arrivalCity": "Canberra"
        }
    ];
    
    constructor(private _httpService: Http) { }

    ngOnInit() {
        this._httpService.get('http://localhost:57033/api/Flights').subscribe(values => )
    }
}