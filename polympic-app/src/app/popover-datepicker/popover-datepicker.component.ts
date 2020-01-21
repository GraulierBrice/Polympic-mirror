import { Event } from './../../models/event.model';
import { PopoverController } from '@ionic/angular';
import { EventsService } from './../services/events/events.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popover-datepicker',
  templateUrl: './popover-datepicker.component.html',
  styleUrls: ['./popover-datepicker.component.scss'],
})
export class PopoverDatepickerComponent implements OnInit {

  customPickerOptions: any;
  dateTimePick: Date;

  constructor(private eventsService: EventsService, private popoverController: PopoverController) {
    this.dateTimePick = this.eventsService.getDatePicker();
   }

  ngOnInit() {}

  submitDate() {

    this.eventsService.submitDate(this.dateTimePick);
    this.popoverController.dismiss();
/*     console.log(this.eventsService.getDatePicker())
    this.eventsService.setDatePicker(new Date( this.dateTimePick ));
    console.log(this.eventsService.getDatePicker())
    this.eventsService.loaderEvents();
    console.log('Before : ' + this.eventsService.bottomScroll);
    if(this.eventsService.loadEvents().length <= 0) {
      console.log('I am at length < 0');
      this.eventsService.setEvents(this.eventsService.loadEvents().concat(this.eventsService.loadAvenirEvents()))
      this.resetInfiniteScroll(true);
    }
    else if ( this.eventStatusChecker(this.eventsService.loadEvents()) ) {
      console.log('I am at eventStatusChecker');
      this.resetInfiniteScroll(true);
    }
    else {
      console.log('I am at ELSE');
      this.resetInfiniteScroll(false);
    }
    console.log('After : ' + this.eventsService.bottomScroll); */

  }

  cancelDate() {
    this.popoverController.dismiss();
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
    this.eventsService.infiniteScrollCounter = 0;
    this.eventsService.setBottomScroll(bottomScroll);
    this.popoverController.dismiss();
  }

  getDatePicker() {
    return this.eventsService.getDatePicker();
  }



}
