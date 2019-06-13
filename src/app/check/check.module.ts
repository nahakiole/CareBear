import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {CheckPage} from './check.page';
import {CareBearComponent} from '../care-bear/care-bear.component';
import {ComponentModuleModule} from '../component-module/component-module.module';

const routes: Routes = [
    {
        path: '',
        component: CheckPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponentModuleModule
    ],
    declarations: [CheckPage]
})
export class CheckPageModule {
}
