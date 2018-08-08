import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'Grid-progress-bar',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.css']
})

export class ProgressComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number = 86;
    bgColor: string = "green";

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
        
    }

    onClick(): void {
        this.ratingClicked.emit(`Current flight ratng is ` + this.rating);
    }
}