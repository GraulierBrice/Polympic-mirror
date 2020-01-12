import { EventsService } from './../events/events.service';
import { SPORTS_FILTERS_MOCKED } from './../../../mocks/sportFilter.mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportsFilterService {

  private sportsFilter;
  private sportsSelected;

  constructor(private eventsService: EventsService) {
    this.sportsFilter = SPORTS_FILTERS_MOCKED;
    this.sportsSelected = [];
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
      if(this.sportsSelected.length === 0) {
        this.eventsService.initializeEvents();
      }
      else this.launchFilter();
    }
    sport.clicked = !sport.clicked;
  }

  launchFilter() {
    let selectedValues = this.sportsSelected.map(sport => { return sport.name; })
    this.eventsService.initializeEvents();
    console.log(selectedValues);
    this.eventsService.events = this.eventsService.events.filter( event => {
      console.log(event.type);
      return selectedValues.includes(event.type);
    } )
  }

  getSportContrast(sport) {
    if(sport.clicked) return 'contrast(0.5)';
    else return 'contrast(1)';
  }

  resetFilters() {
    this.sportsFilter.forEach( sport => {
      sport.clicked = false;
    } )
    this.sportsSelected = [];
    this.eventsService.initializeEvents();
  }
}
