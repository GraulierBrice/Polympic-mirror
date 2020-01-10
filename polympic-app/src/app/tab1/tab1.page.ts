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
  eventsService;
  selected_event;
  
  constructor(service: EventsService, private navCtrl: NavController) {
    this.events = service.events;
    this.eventsService = service.events;
  }

  getSportIcon(sport) {
    return SPORTS_MOCKED[sport];
  }

  filterEvents(e) {
    this.events = this.eventsService;
    const val = e.target.value;
    if(val && val.trim() != '') {
      this.events = this.events.filter( event => {
        return (event.name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (event.type.toLowerCase().indexOf(val.toLowerCase()) > -1); 
      } )
    }
  }
}
