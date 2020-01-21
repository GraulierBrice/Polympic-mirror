import { EventsService } from '../services/events/events.service';
import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../services/favorite/favorite.service';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.scss'],
})
export class HeaderTabsComponent implements OnInit {

  clicked: boolean;

  constructor(private eventsService: EventsService, private favoriteService: FavoriteService) {
    this.clicked = false;
   }

  ngOnInit() {}


  filterEventsByFavorites() {
    if(!this.clicked) {
      console.log('Im in header tabs');
      this.eventsService.filterEventsByFavorites();
      this.clicked = true;
      this.eventsService.setClicked(true);
    }

    else {
      this.eventsService.loaderEvents(false);
      this.eventsService.initializeEvents();
      this.clicked = false;
      this.eventsService.setClicked(false);
    }
  }

}
