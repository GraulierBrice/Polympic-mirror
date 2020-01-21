import { FavoriteService } from '../favorite/favorite.service';

import { TeamsService } from '../teams/teams.service';
import { Event } from '../../../models/event.model';

import { AthletesService } from '../athletes/athletes.service';
import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { EVENTS_MOCKED } from '../../../mocks/event.mock'
import { IonList } from '@ionic/angular';
import { Favoriseable } from 'src/models/favorisable.model';
import { DAYS_DATE_MOCKED } from 'src/mocks/DaysDate.mock';
import { MONTHS_DATE_MOCKED } from 'src/mocks/MonthsDate.mock';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
  events: Event[];
  eventsLoader: Event[];
  bottomScroll: boolean;
  clicked: boolean;
  datePicker: Date = new Date(2020, 1, 11);
  infiniteScrollCounter: Number = 0;
  todayDate: Date;

  constructor(private athletesService : AthletesService, private teamsService : TeamsService, private favoriteService: FavoriteService) { 
    this.initializeEvents();
    this.loaderEvents();
    this.bottomScroll = false;
    this.datePicker = new Date(2020, 1, 11);
    this.todayDate = this.datePicker;
  }

  setClicked(b) {
    this.clicked = b;
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log(`infiniteScrollCounter ${this.infiniteScrollCounter}`)
      if(this.infiniteScrollCounter === 0) {
        this.setEvents( this.loadEvents().concat(this.loadBientotEvents()) );
        this.infiniteScrollCounter = +this.infiniteScrollCounter + 1;
        infiniteScroll.target.complete();
      }
      else if (this.infiniteScrollCounter === 1) {
        this.setEvents( this.loadEvents().concat(this.loadAvenirEvents()) );
        this.infiniteScrollCounter = 0;
        infiniteScroll.target.complete();
        this.setBottomScroll(true);
      }
      console.log('Async operation has ended');
    }, 750);
  }

  submitDate(dateTimePick) {
    console.log(this.getDatePicker())
    this.setDatePicker(new Date( dateTimePick ));
    console.log(this.getDatePicker())
    this.doLoadingEvents();

  }

  doLoadingEvents() {
    this.loaderEvents();
    console.log('Before : ' + this.bottomScroll);
    console.log('Events loader : ' + this.loadEvents().length) 
    this.loadEvents().forEach( event => {
      console.log(event.status);
    } )
    if(this.loadEvents().length <= 0) {
      console.log('I am at length < 0');
      this.setEvents(this.loadEvents().concat(this.loadAvenirEvents()))
      this.resetInfiniteScroll(true);
    }
    else if ( this.eventStatusChecker(this.loadEvents()) ) {
      console.log('I am at eventStatusChecker');
      this.resetInfiniteScroll(true);
    }
    else {
      console.log('I am at ELSE');
      this.resetInfiniteScroll(false);
    }
    console.log('After : ' + this.bottomScroll);
  }

  eventStatusChecker(events: Event[]): boolean {
    let result = true;
    console.log('EventStatusChecker : ');
    events.forEach( event => {
      console.log(event.status);
      if(event.status === 'En cours' || event.status === 'Bientot') result = false;
    } )
    return result;
  }

  resetInfiniteScroll(bottomScroll: boolean) {
    this.infiniteScrollCounter = 0;
    this.setBottomScroll(bottomScroll);
  }

  getCurrentDay() {
    let todayDate = DAYS_DATE_MOCKED[ this.datePicker.getDay() ];
    let monthDate = MONTHS_DATE_MOCKED[ this.datePicker.getMonth() ]
    return `${todayDate} ${this.datePicker.getDate().toString()} ${monthDate} ${this.datePicker.getFullYear().toString()}`;
  }

  getDatePicker() {
    return this.datePicker;
  }

  setDatePicker(dateValue: Date) {
    this.datePicker = dateValue;
    //this.doInfinite();
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

    if(bottomScroll) this.bottomScroll = bottomScroll;
  }

  loadAvenirEvents() {
    return this.getAllEvents().filter( event => {
      return event.status === 'A venir' && this.eventDateChecker(event);
    } );
  }

  loadBientotEvents() {
    return this.getAllEvents().filter( event => {
      return event.status === 'Bientot' && this.eventDateChecker(event);
    } )
  }

  loadEvents() {
    if (this.clicked) {
      return this.favoriteService.loadEvents();
    }
    return this.eventsLoader;
  }

  loadFinishedEvents() {
    return this.getAllEvents().filter( event => {
      return event.status === 'Terminé' && this.eventDateChecker(event);
    } )
  }

  eventDateChecker(event: Event) {
    return event.beginDate.getFullYear().toString() === this.datePicker.getFullYear().toString() 
          && event.beginDate.getMonth().toString() === this.datePicker.getMonth().toString()
          && event.beginDate.getDate().toString() === this.datePicker.getDate().toString();
  }

  loadEnCoursEvents(status?) {
    return this.getAllEvents().filter( event => {
      if(status) {
        return (event.status === 'En cours' || event.status === status) && this.eventDateChecker(event);
      } 
      else return event.status === 'En cours' && this.eventDateChecker(event);
    } )
  }

  setEvents(events: Favoriseable[]): void {
    this.eventsLoader = events as Event[];
  }

  getRelatedEvents(eventsId){
    let res = [];
    for (let id of eventsId){
      res.push(this.getEvent(Number(id)));
    }
    return res;
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

  getResultsAthlete(eventId) {
    const event = this.getEvent(eventId);
    var res = []
    if(event.status === 'Terminé') {
      for(var el of event.results) {
        let ath = {
          athlete : { },
          res : '' 
        }
        let athlete = this.athletesService.getAthlete(el.id)
        ath.athlete = athlete;
        ath.res = el.res;
        res.push(ath);
      }
    }
    return res;
  }

  getWinner(winnerId: Number) {
    return this.athletesService.getAthletes().find(athlete => {
      return athlete.id === winnerId;
    })
  }

  getAthleteEvents(athlete, status){
    console.log(status)
    return this.events.filter(event => {
      return event.participants.includes(athlete.id) && event.status==status;
    })
  }

  initializeEvents () {
    this.events = EVENTS_MOCKED;
  }

  filterEvents(searchTerm: String) {
    if(searchTerm !== '') {
      this.eventsLoader = EVENTS_MOCKED.filter( event => {
        return (event.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
               (event.type.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1); 
      } )
      console.log("events: "+this.eventsLoader)
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