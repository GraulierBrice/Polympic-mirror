import { FavoriteService } from '../favorite.service';

import { TeamsService } from './../teams/teams.service';
import { Event } from '../../../models/event.model';

import { AthletesService } from '../athletes/athletes.service';
import { Injectable } from '@angular/core';
import { EVENTS_MOCKED } from '../../../mocks/event.mock'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  

  events: Event[];

  constructor(private athletesService : AthletesService, private teamsService : TeamsService, private favoriteService: FavoriteService) { 
    this.initializeEvents();
  }


  getAllEvents() {
    return [...this.events];
  }

  getEvent(eventId: Number) {
    return {...this.events.find(event => {
      return event.id === eventId;
    })}
  }

  getParticipantsToEvent(eventId: Number) {
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

  getPodiumAthlete(eventId) {
    const event = this.getEvent(eventId);
    var res = [];
    if(event.status === 'Terminé') {
      for(var id of event.podium) {
        res.push(this.athletesService.getAthlete(id));
      }
    }
    return res;
  }

  getWinner(winnerId: Number) {
    return this.athletesService.getAthletes().find(athlete => {
      return athlete.id === winnerId;
    })
  }

  initializeEvents () {
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

  filterEventsByFavorites() {

    let arrayOfSports: String[] = [];
    this.favoriteService.getAllSportFavorite().then( sport => {

      sport.forEach( s => {
        //if(!arrayOfSports.includes(s.name))
        arrayOfSports.push(s.name);
      } )

    } )
    console.log('Array Of Sports : ' + arrayOfSports);
    this.favoriteService.getAllCompetFavorite().then ( compet => {
      console.log(arrayOfSports);
      if(compet.length || arrayOfSports.length) {
        this.events = this.events.filter( event => {
          console.log(event.type);
          return compet.includes(event.id) || arrayOfSports.includes(event.type);
        } )
      }
      else {
        this.events = [];
      } 
    })
/*         return compet.map(eventId => {
          console.log(`event.id : ${event.id} // eventId : ${eventId}`);
          return event.id === eventId;
        }) */
      } 
}