import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number = 86;

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.notify.emit('Clicked... !');
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}