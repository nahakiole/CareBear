import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {AfterCheckPage} from './after-check.page';
import {ComponentModuleModule} from '../component-module/component-module.module';

const routes: Routes = [
    {
        path: '',
        component: AfterCheckPage
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
    declarations: [AfterCheckPage]
})
export class AfterCheckPageModule {
}
