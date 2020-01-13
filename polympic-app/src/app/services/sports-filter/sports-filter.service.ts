import { EventType } from './../../eventType.model';
import { EventsService } from './../events/events.service';
import { SPORTS_FILTERS_MOCKED } from './../../../mocks/sportFilter.mock';
import { Injectable } from '@angular/core';
import { EVENTSTYPES_MOCKED } from 'src/mocks/eventType.mock';

@Injectable({
  providedIn: 'root'
})
export class SportsFilterService {

  private sportsFilter;
  private sportsSelected;

  private eventsTypes : EventType[];
  private eventsTypeSelected;

  constructor(private eventsService: EventsService) {
    this.sportsFilter = SPORTS_FILTERS_MOCKED;
    this.eventsTypes = EVENTSTYPES_MOCKED;
    this.sportsSelected = [];
    this.eventsTypeSelected = [];
   }

   getSportsFilters() {
     return this.sportsFilter;
   }

  filterBySport(sport) {
    
    if(!sport.clicked) {
      this.sportsSelected.push(sport);
      console.log(`Sports Selected : ${this.sportsSelected}`);
      this.launchFilter();
    }
    else {
      this.sportsSelected.forEach( (item, index) => {
        if (item === sport) this.sportsSelected.splice(index, 1);
      } )
      if(this.sportsSelected.length === 0 && this.eventsTypeSelected.length === 0) {
        this.eventsService.initializeEvents();
      }
      else this.launchFilter();
    }
    sport.clicked = !sport.clicked;
  }

  launchFilter() {
    let selectedValues = this.sportsSelected.map(sport => { return sport.name; })
    let selectedTypes = this.eventsTypeSelected.map( eventType => { return eventType.name; })

    this.eventsService.initializeEvents();
    console.log(selectedValues);

    if(selectedTypes.length) {
      this.eventsService.events = this.eventsService.events.filter( event => {
        return selectedTypes.includes(event.eventType.name);
      } )
    }

    if(selectedValues.length) {
      this.eventsService.events = this.eventsService.events.filter( event => {
        console.log(event.type);
        return selectedValues.includes(event.type);
      } )
    }

  }

  getSportContrast(sport) {
    if(sport.clicked) return 'contrast(0.1)';
    else return 'contrast(1)';
  }

  resetFilters() {
    this.sportsFilter.forEach( sport => {
      sport.clicked = false;
    } )
    this.eventsTypes.forEach( event => {
      event.clicked = false;
    } )

    this.sportsSelected = [];
    this.eventsTypeSelected = [];
    this.eventsService.initializeEvents();
  }

  filterEventType(eventType) {
    if(!this.eventsTypeSelected.includes(eventType)) {
      this.eventsTypeSelected.push(eventType);
      this.launchFilter();
    }

    else {
      this.eventsTypeSelected.forEach( (item, index) => {
        if (item === eventType) this.eventsTypeSelected.splice(index, 1);
      } )
      if(this.sportsSelected.length === 0 && this.eventsTypeSelected.length === 0) {
        this.eventsService.initializeEvents();
      }
      else this.launchFilter();
    }
    eventType.clicked = !eventType.clicked;
  }

  getEventsTypes() {
    return this.eventsTypes;
  }
}
