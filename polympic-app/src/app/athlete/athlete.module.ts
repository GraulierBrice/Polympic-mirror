import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AthletePageRoutingModule } from './athlete-routing.module';

import { AthletePage } from './athlete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AthletePageRoutingModule
  ],
  declarations: [AthletePage]
})
export class AthletePageModule {}
