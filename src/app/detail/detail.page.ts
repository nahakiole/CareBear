import {Component, OnDestroy, OnInit} from '@angular/core';
import * as data from '../../assets/data.json';
import {ListPage} from '../list/list.page';
import {ActivatedRoute} from '@angular/router';
import {EntryComponent} from '../entry/entry.component';
import {CallNumber} from '@ionic-native/call-number/ngx';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import {Calendar} from '@ionic-native/calendar/ngx';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';


@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {
    private sub: any;

    public item = {
        type: 'counselling'
    };
    private id: any;


    getType(type: any) {
        return EntryComponent.getCategory(type);
    }

    call(phoneNumber: any) {
        this.callNumber.callNumber(phoneNumber, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }

    sendMail(email: any) {
        const message = {
            app: 'com.google.android.gm',
            to: email,
            body: ''
        };
        this.emailComposer.open(message);
    }


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params.id; // (+) converts string 'id' to a number
            const services: any = data;
            this.item = services.default.filter(
                element => parseInt(element.id, 10) === parseInt(this.id, 10))[0];


        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    constructor(private route: ActivatedRoute,
                private callNumber: CallNumber,
                private emailComposer: EmailComposer,
                private calendar: Calendar,
                private iab: InAppBrowser) {

    }

    isFavorite(id: any) {
        return ListPage.favorites.includes(id);
    }

    addFavorite(id: any) {
        ListPage.favorites.push(id);
    }

    addReminder(item: any) {
        const date = new Date();
        const options = {firstReminderMinutes: 15};

        this.calendar.createEventInteractivelyWithOptions(
            'Reminder to call ' + item.name + ' (' + item.phone + ')',
            '', '', date, date, options).then(res => {
        }, err => {
            console.log('err: ', err);
        });
    }


    removeFavorite(id: any) {
        const index: number = ListPage.favorites.indexOf(id);
        if (index !== -1) {
            ListPage.favorites.splice(index, 1);
        }
    }

    openWebpage(url: any) {
        const browser = this.iab.create(url);
    }

    openMaps(item: any) {
        const browser = this.iab.create('https://www.google.ch/maps/place/' + item.adress + '+' + item.city);
    }
}
