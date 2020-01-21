import { Event } from 'src/models/event.model';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { PopoverEventsComponent } from './../popover-events/popover-events.component';
import { EventsService } from '../services/events/events.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, PopoverController, IonList, IonContent } from '@ionic/angular';
import { SPORTS_ICONS_MOCKED } from '../../mocks/sportIcons.mock'
import { FavoriteService } from '../services/favorite/favorite.service';
import { Favoriseable } from 'src/models/favorisable.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild(IonList, { read: ElementRef, static: true }) list: ElementRef;

  offsetTop;
  completedBottom: boolean;
  infiniteScrollCounter: Number;
  offsetTopValue: Number;
  executedScroll: boolean
  
  constructor(private service: EventsService, private navCtrl: NavController, private popOverCtrl: PopoverController, private localNotifications: LocalNotifications) {
    this.completedBottom = false;
    this.infiniteScrollCounter = 0;
    this.offsetTopValue = 516;
    this.executedScroll = false;
  }

  ionViewWillEnter() {
    this.getAllEvents();
    this.scrollListVisible(false);
  }

  loadEvents() {
    return this.service.loadEvents();
  }

  setEvents(events: Favoriseable[]): void {
    console.log(event);
    this.service.setEvents(events);
  }


  doInfinite(infiniteScroll) {
    this.service.doInfinite(infiniteScroll);
/*     console.log('Begin async operation');

    setTimeout(() => {
      if(this.infiniteScrollCounter === 0) {
        this.setEvents( this.loadEvents().concat(this.service.loadBientotEvents()) );
        this.infiniteScrollCounter = +this.infiniteScrollCounter + 1;
        infiniteScroll.target.complete();
      }
      else if (this.infiniteScrollCounter === 1) {
        this.setEvents( this.loadEvents().concat(this.service.loadAvenirEvents()) );
        this.infiniteScrollCounter = 0;
        infiniteScroll.target.complete();
        infiniteScroll.target.disable = true;
        this.service.setBottomScroll(true);
      }
      console.log('Async operation has ended');
    }, 500); */
  }

  scrollListVisible(value: boolean) {

    if(!this.executedScroll || value) {
      let arr = this.list.nativeElement.children;
      let i = 0;
      let myEvent: Event;
  
      for(let event of this.loadEvents()) {
        if(event.status === 'En cours') {
          myEvent = event;
          break;
        }
        i++;
      }
      if(myEvent) {
        let id = i;
        let event = arr[id]; 
        event.scrollIntoView( {behavior: 'smooth', block: 'start' } );
      }

      this.executedScroll = !this.executedScroll;
    }
  }

  isTodayDate() {
    let day = this.service.todayDate.getDate().toString() === this.service.datePicker.getDate().toString();
    let month = this.service.todayDate.getMonth().toString() === this.service.datePicker.getMonth().toString();
    let year = this.service.todayDate.getFullYear().toString() === this.service.datePicker.getFullYear().toString();

    return day && month && year;
  }

  resetDate() {
    this.service.setDatePicker(this.service.todayDate);
    this.service.submitDate(this.service.datePicker);
  }

  eventEnCoursAvailable() {
    for(let event of this.loadEvents()) {
      if (event.status === 'En cours') {
       return true; 
      }
    }
    return false;
  }

  getCurrentDay() {
    return this.service.getCurrentDay()
  }

  onScroll(e) {
    //console.log(e);
    this.offsetTop = e.detail.scrollTop;
  }

  getSportIcon(sport) {
    return SPORTS_ICONS_MOCKED[sport];
  }

  getAllEvents(): Event[] {
    return this.service.getAllEvents();
  }

   filterEvents(e) {
     this.service.loaderEvents();
     this.service.initializeEvents();
     console.log(e);
    const val = e.detail.value;
    if(val != '') {
      this.service.filterEvents(val);
      console.log('value'+val)
      this.service.setBottomScroll(true);
    }
    else this.service.setBottomScroll(false);
    console.log(this.loadEvents());
  }

  getBottomScroll() {
    return this.service.getBottomScroll();
  }

  registerNotification(ms) {
    this.localNotifications.schedule( {
      title: `my ${ms} notification`,
      text: 'my detailed description',
      trigger: { at: new Date(new Date().getTime() + ms ) }
    } );
  }
  
  async presentPopover() {
    const popover = await this.popOverCtrl.create({
      component: PopoverEventsComponent,
      translucent: true
    });
    return await popover.present();
  }


  getEventColor(status: String) {
    switch(status) {
      case 'Terminé': return "danger"; break;
      case 'A venir': return "medium"; break;
      case 'En cours': return "success"; break;
      case 'Bientot': return "warning"; break;
    }
  }

  getEventWinner(event: Event) {
    return this.service.getWinner(event.winner);
  }

}
