import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'Grid-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.css']
})

export class LabelComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number = 86;
    bgColor: string = "red";

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
        if (this.rating > 4) { this.bgColor = "green" }
        else if (this.rating > 2) { this.bgColor = "blue" }
        else { this.bgColor = "red" }
    }

    onClick(): void {
        this.ratingClicked.emit(`Current flight ratng is ` + this.rating);
    }
}