import { SportsFilterService } from './../services/sports-filter/sports-filter.service';
import { SPORTS_FILTERS_MOCKED } from './../../mocks/sportFilter.mock';
import { EventsService } from '../services/events/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-events',
  templateUrl: './popover-events.component.html',
  styleUrls: ['./popover-events.component.scss'],
})
export class PopoverEventsComponent implements OnInit {

  constructor(private sportsFilterService : SportsFilterService) {
   }

  ngOnInit() {}


  filterBySport(sport) {
    this.sportsFilterService.filterBySport(sport);
  }

  getAllSportsFilters() {
    return this.sportsFilterService.getSportsFilters();
  }

  getSportContrast(sport) {
    return this.sportsFilterService.getSportContrast(sport);
  }

  resetFilters() {
    this.sportsFilterService.resetFilters();
  }


/*   filterBySport(sport) {
    
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
  } */
}