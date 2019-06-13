import {Component, Input, OnInit} from '@angular/core';
import {ListPage} from '../list/list.page';

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.scss'],
})
export class EntryComponent implements OnInit {

    public static categories = ListPage.categories;

    @Input() item;
    @Input('link') link: string;

    static getCategory(type: any) {
        const category = this.categories.filter(
            element => element.type === type);
        return category[0];
    }


    getType(type: any) {
        return EntryComponent.getCategory(type).title;
    }


    constructor() {
    }

    ngOnInit() {
    }


}
