import { EventsService } from './../services/events/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.scss'],
})
export class HeaderTabsComponent implements OnInit {

  clicked: boolean;

  constructor(private eventsService: EventsService) {
    this.clicked = false;
   }

  ngOnInit() {}


  filterEventsByFavorites() {
    if(!this.clicked) {
      this.eventsService.filterEventsByFavorites();
      this.clicked = true;
    }

    else {
      this.eventsService.initializeEvents();
      this.clicked = false;
    }
  }

}
