import { Event } from 'src/models/event.model';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { PopoverEventsComponent } from './../popover-events/popover-events.component';
import { EventsService } from '../services/events/events.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, PopoverController, IonList, IonContent } from '@ionic/angular';
import { SPORTS_ICONS_MOCKED } from '../../mocks/sportIcons.mock'
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild(IonList, { read: ElementRef, static: false }) list: ElementRef;

  offsetTop;
  
  constructor(private service: EventsService, private navCtrl: NavController, private popOverCtrl: PopoverController, private localNotifications: LocalNotifications) {
  
  }

  ionViewWillEnter() {
    this.getAllEvents();
    this.scrollListVisible();
  }

  scrollListVisible() {
    let arr = this.list.nativeElement.children;
    let i = 0;
    let myEvent: Event;

    for(let event of this.getAllEvents()) {
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

  onScroll(e) {
    console.log(e);
    this.offsetTop = e.detail.scrollTop;
  }

  getSportIcon(sport) {
    return SPORTS_ICONS_MOCKED[sport];
  }

  getAllEvents(): Event[] {
    return this.service.getAllEvents();
  }

   filterEvents(e) {
     this.service.initializeEvents();
    const val = e.target.value;
    if(val && val.trim() != '') {
      this.service.filterEvents(val);
    }
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

  filterEventsByFavorites() {
    this.service.filterEventsByFavorites();
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
