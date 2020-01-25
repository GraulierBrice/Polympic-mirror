import { PopoverDatepickerComponent } from './../popover-datepicker/popover-datepicker.component';
import { NavController, PopoverController } from '@ionic/angular';
import { EventsService } from './../services/events/events.service';
import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../services/favorite/favorite.service';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.scss'],
})
export class HeaderTabsComponent implements OnInit {

  clicked: boolean;

  constructor(private eventsService: EventsService, private navCtrl: NavController, private popOverCtrl: PopoverController) {
    this.clicked = false;
   }

  ngOnInit() {}


  filterEventsByFavorites() {
    if(!this.clicked) {
      this.clicked = true;
      this.eventsService.setClicked(true);
      this.eventsService.resetInfiniteScroll(true);
    }

    else {
      this.clicked = false;
      this.eventsService.setClicked(false);
      
      //this.eventsService.loaderEvents(false);
      this.eventsService.doLoadingEvents();
      this.eventsService.initializeEvents();

    }
  }

  async presentPopover() {
    const popover = await this.popOverCtrl.create({
      component: PopoverDatepickerComponent,
      translucent: true
    });
    return await popover.present();
  }

}
