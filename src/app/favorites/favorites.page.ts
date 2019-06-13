import {Component, OnInit} from '@angular/core';
import * as data from '../../assets/data.json';
import {ListPage} from '../list/list.page';


@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.page.html',
    styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

    public items: any;

    constructor() {

    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        const services: any = data;
        this.items = services.default.filter(x => {
            return ListPage.favorites.includes(x.id);
        });
    }

}
