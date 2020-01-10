import { EventsService } from './../events.service';
import { Athlete } from '../athlete.model';
import { Component } from '@angular/core';
import { Event } from '../event.model';
import { NavController } from '@ionic/angular';
import { SPORTS_MOCKED } from './../../mocks/sport.mock'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  events: Event[];
  selected_event;
  
  constructor(service: EventsService, private navCtrl: NavController) {
    this.events = service.events;
  }

  getSportIcon(sport) {
    return SPORTS_MOCKED[sport];
  }
}
