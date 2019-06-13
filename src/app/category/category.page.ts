import {Component, OnDestroy, OnInit} from '@angular/core';
import * as data from '../../assets/data.json';
import {ActivatedRoute} from '@angular/router';
import {ListPageModule} from '../list/list.module';
import {ListPage} from '../list/list.page';


@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit, OnDestroy {
    id: number;
    private sub: any;

    public category = {
        title: '',
        icon: '',
        color: '',
        type: ''
    };

    public items = [];


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params.id; // (+) converts string 'id' to a number
            console.dir(ListPage);
            this.category = ListPage.categories[this.id];


            const services: any = data;
            this.items = services.default.filter(
                element => element.type ===   this.category.type);

        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    constructor(private route: ActivatedRoute) {

    }


}
