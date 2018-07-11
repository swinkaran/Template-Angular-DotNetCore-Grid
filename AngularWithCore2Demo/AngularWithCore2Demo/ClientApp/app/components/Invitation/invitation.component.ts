import { Component } from "@angular/core";

@Component({
    selector: 'invitation',
    templateUrl: './invitation.component.html',
    styleUrls: ['./invitation.component.css'],
})

export class Invitation {
    title: string;

    constructor() {
        this.title = "Invitaion list";
    }
}