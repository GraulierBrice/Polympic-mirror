import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { EventsService } from './../services/events/events.service';
import { Event } from 'src/models/event.model';
import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SPORTS_ICONS_MOCKED } from 'src/mocks/sportIcons.mock';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {

  @Input() event: Event;
  currentPosition;

  constructor(private service: EventsService, private navCtrl: NavController, private localNotifications: LocalNotifications,
              private geolocation: Geolocation) { }

  ngOnInit() {
     this.currentPosition = this.geolocation.watchPosition();

     this.currentPosition.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
       data.coords.latitude
       data.coords.longitude
     });
  }

  getSportIcon(sport) {
    return SPORTS_ICONS_MOCKED[sport];
  }

  getAllEvents() {
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

  getLocations() {
    return this.event.place;
  }


  getDistance(){

    let currentLatitude;
    let currentLongitude;

    this.currentPosition.forEach( location => {
      currentLatitude = location.latitude;
      currentLongitude = location.longitude;
    } )

    let usersLocation = {
        lat: 	currentLatitude, 
        lng:  currentLongitude
    };

    let placeLocation = {
            lat: this.getLocations().latitude,
            lng: this.getLocations().longitude
        };

        return this.getDistanceBetweenPoints(
            usersLocation,
            placeLocation,
            'km'
        ).toFixed(2);
}

getDistanceBetweenPoints(start, end, units){

    let earthRadius = {
        miles: 3958.8,
        km: 6371
    };

    let R = earthRadius[units || 'miles'];
    let lat1 = start.lat;
    let lon1 = start.lng;
    let lat2 = end.lat;
    let lon2 = end.lng;

    let dLat = this.toRad((lat2 - lat1));
    let dLon = this.toRad((lon2 - lon1));
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    return d;

}

toRad(x){
    return x * Math.PI / 180;
}

}
