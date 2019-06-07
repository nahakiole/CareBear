import {Component, ViewChild} from '@angular/core';
import { IonSlides, IonSlide } from '@ionic/angular';
import {CareBearComponent} from '../care-bear/care-bear.component';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    a: CareBearComponent;

    @ViewChild('slides') slides: IonSlides;

    next() {
        this.slides.slideNext();
    }

    prev() {
        this.slides.slidePrev();
    }

}
