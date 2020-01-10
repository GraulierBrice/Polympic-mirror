import { EventsService } from './../events.service';
import { Athlete } from '../athlete.model';
import { Component } from '@angular/core';
import { Event } from '../event.model';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  events: Event[];
  constructor(service: EventsService, private navCtrl: NavController) {
    this.events = service.events;
    
  }

}
