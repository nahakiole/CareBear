import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {CareBearComponent} from '../care-bear/care-bear.component';
import {ComponentModuleModule} from '../component-module/component-module.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
        ComponentModuleModule
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
