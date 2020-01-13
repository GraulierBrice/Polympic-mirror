
import { TeamsService } from './../teams/teams.service';
import { Event } from 'src/models/event.model';

import { AthletesService } from '../athletes/athletes.service';
import { Injectable } from '@angular/core';
import { EVENTS_MOCKED } from '../../../mocks/event.mock'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  

  events: Event[];

  constructor(private athletesService : AthletesService, private teamsService : TeamsService) { 
    this.initializeEvents();
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
    var arr;
    if(event.eventType.name === 'Team') {
      arr = this.teamsService.getTeams().filter(function(team) {
        return event.participants.indexOf(Number(team.id)) !== -1;
      })
    }
    else if(event.eventType.name === 'Solo') {
      arr = this.athletesService.getAthletes().filter(function(athlete) {
        return event.participants.indexOf(Number(athlete.id)) !== -1;
      });
    }


    return arr;
  }

  getWinner(winnerId: String) {
    return this.athletesService.getAthletes().find(athlete => {
      return athlete.id === winnerId;
    })
  }

  initializeEvents() {
    this.events = EVENTS_MOCKED;
  }

  filterEvents(searchTerm: String) {
    if(searchTerm !== '') {
      this.events = this.events.filter( event => {
        return (event.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
               (event.type.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1); 
      } )
    }
  }
}