import { Event } from 'src/app/event.model';

import { AthletesService } from './athletes.service';
import { Injectable } from '@angular/core';
import { EVENTS_MOCKED } from './../mocks/event.mock'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  

  events: Event[];
  constructor(private athletesService : AthletesService) { 
    this.events = EVENTS_MOCKED;
  }


  getAllEvents() {
    return [...this.events];
  }

  getEvent(eventId: String) {
    return {...this.events.find(event => {
      return event.id === eventId;
    })}
  }

  getParticipantsToEvent(eventId: String) {
    const event = this.getEvent(eventId);

    var arr = this.athletesService.getAthletes().filter(function(item) {
      return event.participants.indexOf(Number(item.id)) !== -1;
    });

    return arr;
  }

  getWinner(winnerId: String) {
    return this.athletesService.getAthletes().find(athlete => {
      return athlete.id === winnerId;
    })
  }


}
