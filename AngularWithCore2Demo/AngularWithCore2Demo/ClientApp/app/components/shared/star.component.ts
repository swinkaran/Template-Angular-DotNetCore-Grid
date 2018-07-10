import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'Grid-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number = 86;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
    
    onClick(): void {
        this.ratingClicked.emit(`Current flight ratng is ` + this.rating);
    }
}