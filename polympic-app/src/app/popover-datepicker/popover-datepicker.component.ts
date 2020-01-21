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
    console.log(this.eventsService.getDatePicker())
    this.eventsService.setDatePicker(new Date( this.dateTimePick ));
    console.log(this.eventsService.getDatePicker())
    this.eventsService.loaderEvents();
    if(this.eventsService.loadEvents().length <= 0) {
      this.eventsService.setEvents(this.eventsService.loadEvents().concat(this.eventsService.loadAvenirEvents()))
      this.resetInfiniteScroll(true);
    }
    else if ( this.eventStatusChecker(this.eventsService.loadEvents()) ) {
      this.resetInfiniteScroll(true);
    }
    else {
      this.resetInfiniteScroll(false);
    }
    console.log('EVENTS : ' + this.eventsService.loadEvents())

  }

  cancelDate() {
    this.popoverController.dismiss();
  }

  eventStatusChecker(events: Event[]): boolean {
    events.forEach( event => {
      if(event.status === 'En cours' || event.status === 'Bientot') return false;
    } )
    return true;
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
