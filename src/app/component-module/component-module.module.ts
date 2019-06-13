import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CareBearComponent} from '../care-bear/care-bear.component';
import {EntryComponent} from '../entry/entry.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        CareBearComponent,
        EntryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule
    ],
    exports: [
        CareBearComponent,
        EntryComponent
    ]
})
export class ComponentModuleModule {
}
