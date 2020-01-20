import { Event } from 'src/models/event.model';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { PopoverEventsComponent } from './../popover-events/popover-events.component';
import { EventsService } from '../services/events/events.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, PopoverController, IonList, IonContent } from '@ionic/angular';
import { SPORTS_ICONS_MOCKED } from '../../mocks/sportIcons.mock'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild(IonList, { read: ElementRef, static: false }) list: ElementRef;

  offsetTop;
  completedBottom: boolean;
  infiniteScrollCounter: Number;
  offsetTopValue: Number;
  
  constructor(private service: EventsService, private navCtrl: NavController, private popOverCtrl: PopoverController, private localNotifications: LocalNotifications) {
    console.log('Consutrctor');
    this.completedBottom = false;
    this.infiniteScrollCounter = 0;
    this.offsetTopValue = 76;
  }

  ionViewWillEnter() {
    this.getAllEvents();
    this.scrollListVisible();
  }

  loadEvents() {
    return this.service.loadEvents();
  }

  setEvents(events: Event[]): void {
    console.log(event);
    this.service.setEvents(events);
    console.log(this.service.eventsLoader);
  }


  doInfinite(infiniteScroll) {
    console.log(typeof infiniteScroll)
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

  scrollListVisible() {
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
    let id = i;
    let event = arr[id]; 
    event.scrollIntoView( {behavior: 'smooth', block: 'start' } );
  }

  eventEnCoursAvailable() {
    for(let event of this.loadEvents()) {
      if (event.status === 'En cours') {
       return true; 
      }
    }
    return false;
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
    const val = e.target.value;
    if(val && val.trim() != '') {
      this.service.filterEvents(val);
      this.service.setBottomScroll(true);
    }
    else this.service.setBottomScroll(false);
    console.log(this.loadEvents());
    console.log(this.service.getAllEvents());
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
    }
  }

  getEventWinner(event: Event) {
    return this.service.getWinner(event.winner);
  }

}
