import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {FavoritesPage} from './favorites.page';
import {ComponentModuleModule} from '../component-module/component-module.module';

const routes: Routes = [
    {
        path: '',
        component: FavoritesPage
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
    declarations: [FavoritesPage]
})
export class FavoritesPageModule {
}
