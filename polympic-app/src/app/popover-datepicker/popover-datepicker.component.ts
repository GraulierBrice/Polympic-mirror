import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-datepicker',
  templateUrl: './popover-datepicker.component.html',
  styleUrls: ['./popover-datepicker.component.scss'],
})
export class PopoverDatepickerComponent implements OnInit {

  displayDate: Date;
  constructor() { }

  ngOnInit() {}

  submitDate() {
    console.log(`Date : ${this.displayDate}`);
  }

}
