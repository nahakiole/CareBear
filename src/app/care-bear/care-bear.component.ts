import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-care-bear',
    templateUrl: './care-bear.component.html',
    styleUrls: ['./care-bear.component.scss'],
})
export class CareBearComponent implements OnInit {

    @Input() properties = '';

    constructor() {
    }

    ngOnInit() {
    }

}
