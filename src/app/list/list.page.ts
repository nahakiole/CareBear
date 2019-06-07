import {Component, OnInit} from '@angular/core';
import * as data from '../../assets/data.json';


@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {


    public static favorites = ['51'];

    public static categories = [
        {
            title: 'Self Help',
            icon: 'fa-hands-helping',
            color: '#2ecc71',
            type: 'selfhelp'
        }, {
            title: 'Counselling',
            icon: 'fa-comments-alt',
            color: '#1abc9c',
            type: 'counselling'
        }, {
            title: 'Service',
            icon: 'fa-people-carry',
            color: '#3498db',
            type: 'service'
        }, {
            title: 'Meals',
            icon: 'fa-utensils',
            color: '#9b59b6',
            type: 'meals'
        }, {
            title: 'Living',
            icon: 'fa-home-lg-alt',
            color: '#e67e22',
            type: 'living'
        }, {
            title: 'Transport',
            icon: 'fa-wheelchair',
            color: '#e74c3c',
            type: 'transport'
        }
    ];

    public items = [];


    constructor() {
        const services: any = data;
        this.items = services.default.slice(7, 15);
    }

    ngOnInit() {
    }

    public getCategories() {
        return ListPage.categories;
    }

}
