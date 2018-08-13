import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'Grid-progress-bar',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.css']
})

export class ProgressComponent implements OnChanges {
    @Input() completed: number;
    progressWidth: number = 100;
    progressClass: string = "";
    bgColor: string = "red";

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.progressWidth = this.completed;

        if ((this.completed > 0) && (this.completed < 25)) { this.progressClass = "progress-bar progress-bar-striped bg-danger"; }
        else if ((this.completed > 24) && (this.completed < 50)) { this.progressClass = "progress-bar progress-bar-striped bg-warning"; }
        else if ((this.completed > 49) && (this.completed < 75)) { this.progressClass = "progress-bar progress-bar-striped bg-info"; }
        else { this.progressClass = "progress-bar progress-bar-striped bg-success"; }
    }

    onClick(): void {
        this.ratingClicked.emit(`Current flight ratng is ` + this.completed + '%');
    }
}