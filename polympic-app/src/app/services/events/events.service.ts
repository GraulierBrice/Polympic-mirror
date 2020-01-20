import { FavoriteService } from '../favorite/favorite.service';

import { TeamsService } from '../teams/teams.service';
import { Event } from '../../../models/event.model';

import { AthletesService } from '../athletes/athletes.service';
import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { EVENTS_MOCKED } from '../../../mocks/event.mock'
import { IonList } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
  events: Event[];
  eventsLoader: Event[];
  bottomScroll: boolean;

  constructor(private athletesService : AthletesService, private teamsService : TeamsService, private favoriteService: FavoriteService) { 
    this.initializeEvents();
    this.loaderEvents();
    this.bottomScroll = false;
  }

  getBottomScroll() {
    return this.bottomScroll;
  }

  setBottomScroll(value: boolean) {
    this.bottomScroll = value;
  }

  getAllEvents() {
    this.sortEvents();
    return this.events;
  }

  getEvent(eventId: Number) {
    return this.events.find(event => {
      return event.id === eventId;
    })
  }

  loaderEvents(bottomScroll?: boolean) {
    this.eventsLoader = this.loadFinishedEvents().concat( this.loadEnCoursEvents() ) ;

    if(bottomScroll) bottomScroll = bottomScroll;
  }

  loadAvenirEvents() {
    return this.getAllEvents().filter( event => {
      return event.status === 'A venir';
    } );
  }

  loadBientotEvents() {
    return this.getAllEvents().filter( event => {
      return event.status === 'Bientot';
    } )
  }

  loadEvents() {
    
    return this.eventsLoader;
  }

  loadFinishedEvents() {
    return this.getAllEvents().filter( event => {
      return event.status === 'Terminé';
    } )
  }

  loadEnCoursEvents(status?) {
    return this.getAllEvents().filter( event => {
      if(status) return event.status === 'En cours' || event.status === status;
      else return event.status === 'En cours';
    } )
  }

  setEvents(events: Event[]): void {
    this.eventsLoader = events;
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
      this.eventsLoader = this.events.filter( event => {
        return (event.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
               (event.type.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1); 
      } )
    }
  }

  filterEventsByFavorites() {
    /*
    let arrayOfSports: String[] = [];
    this.favoriteService.getFavorite().then( sport => {

      sport.forEach( s => {
        //if(!arrayOfSports.includes(s.name))
        arrayOfSports.push(s.name);
      } )

    } )
    console.log('Array Of Sports : ' + arrayOfSports);
    this.favoriteService.getAllCompetFavorite().then ( compet => {
      console.log(arrayOfSports);
      if(compet.length || arrayOfSports.length) {
        this.eventsLoader = this.events.filter( event => {
          console.log(event.type);
          return compet.includes(event.id) || arrayOfSports.includes(event.type);
        } )
      }
      else {
        this.eventsLoader = [];
      } 
    })

    console.log(this.eventsLoader.length);
/*         return compet.map(eventId => {
          console.log(`event.id : ${event.id} // eventId : ${eventId}`);
          return event.id === eventId;
        }) */
      } 

      sortEvents() {

        this.events.sort( (a,b) => {
    
          let aValue; let bValue;
          aValue = this.calculateSorting(a);
          bValue = this.calculateSorting(b);
    
          return (aValue - bValue);
        } )
      }
    
      calculateSorting(event: Event) {
        switch(event.status) {
          case 'Terminé': return 0; break;
          case 'A venir': return 3; break;
          case 'En cours': return 1; break;
          case 'Bientot': return 2; break;
        }
      }
}