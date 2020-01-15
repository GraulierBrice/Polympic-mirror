


import { HeaderComponent } from './../header/header.component';
import { HeaderTabsComponent } from './../header-tabs/header-tabs.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventsComponent } from '../events/events.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        RouterModule
    ],
    declarations: [HeaderComponent, HeaderTabsComponent, EventsComponent],
    exports: [HeaderComponent, HeaderTabsComponent, EventsComponent]
})
export class ComponentsModule {}
