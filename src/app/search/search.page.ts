import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSearchbar} from '@ionic/angular';
import * as data from '../../assets/data.json';
import * as Fuse from 'fuse.js';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    @ViewChild('search') search: IonSearchbar;

    public items = [];
    public filteredItems = [];
    searchTerm: any;

    constructor() {


    }

    ngOnInit() {


        const services: any = data;
        this.items = services.default;

        const options = {
            keys: ['name', 'website', 'description', 'city', 'address', 'company', 'type'],
            shouldSort: true,
            threshold: 0.4,
            location: 0,
            distance: 100,
            minMatchCharLength: 3
        };
        const fuse = new Fuse(this.items, options);

        this.search.ionChange.subscribe(event => {
            let search = '';
            if (event.detail) {
                search = this.search.value;
            }
            const results = fuse.search(search);
            this.filteredItems = results;
        });
    }

}
