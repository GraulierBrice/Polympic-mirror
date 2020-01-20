import { SportsFilterService } from '../services/sports-filter/sports-filter.service';
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

  filterByEventType(eventType) {
    this.sportsFilterService.filterEventType(eventType);
  }

  getAllEventsTypes() {
    return this.sportsFilterService.getEventsTypes();
  }
}