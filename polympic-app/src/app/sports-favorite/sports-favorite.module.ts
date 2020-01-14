import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportsFavoritePageRoutingModule } from './sports-favorite-routing.module';

import { SportsFavoritePage } from './sports-favorite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FontAwesomeModule,
    SportsFavoritePageRoutingModule
  ],
  declarations: [SportsFavoritePage]
})
export class SportsFavoritePageModule {}
