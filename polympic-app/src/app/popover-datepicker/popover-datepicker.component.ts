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
  }

  cancelDate() {
    this.popoverController.dismiss();
  }

  eventStatusChecker(events: Event[]): boolean {
    let result = true;
    events.forEach( event => {
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
