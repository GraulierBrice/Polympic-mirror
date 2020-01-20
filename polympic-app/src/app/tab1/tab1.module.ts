import { PopoverEventsComponent } from './../popover-events/popover-events.component';

import { ComponentsModule } from './../components/components.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicSelectableModule,
    FontAwesomeModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  entryComponents: [PopoverEventsComponent],
  declarations: [Tab1Page, PopoverEventsComponent]
})
export class Tab1PageModule {}
