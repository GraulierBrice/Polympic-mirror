import { PopoverController } from '@ionic/angular';
import { EventsService } from './../services/events/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-datepicker',
  templateUrl: './popover-datepicker.component.html',
  styleUrls: ['./popover-datepicker.component.scss'],
})
export class PopoverDatepickerComponent implements OnInit {

  customPickerOptions: any;
  dateTimePick

  constructor(private eventsService: EventsService, private popoverController: PopoverController) {
    this.dateTimePick = this.eventsService.getDatePicker();
   }

  ngOnInit() {}

  submitDate() {
    console.log(this.eventsService.getDatePicker())
    this.eventsService.setDatePicker(new Date( this.dateTimePick ));
    console.log(this.eventsService.getDatePicker())
    this.eventsService.loaderEvents();
    this.eventsService.infiniteScrollCounter = 0;
    this.eventsService.setBottomScroll(false);
    this.popoverController.dismiss();
  }

  getDatePicker() {
    return this.eventsService.getDatePicker();
  }



}
