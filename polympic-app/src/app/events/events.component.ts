import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
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
  latitude;
  longitude;

  constructor(private service: EventsService, private navCtrl: NavController, private localNotifications: LocalNotifications,
              private geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      //this.currentPosition = resp;
    }).catch((error) => {
      console.log('Error getting location', error);
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

getBackgroundColor(status: String) {
  switch(status) {
    case 'Terminé': return "danger"; break;
    case 'A venir': return "medium"; break;
    case 'En cours': return "success"; break;
    case 'Bientot': return "warning"; break;
  }
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

  getLocations() {
    return this.event.place;
  }


  getDistance(){

    let usersLocation = {
        lat: 	this.latitude, 
        lng:  this.longitude
    };

    let placeLocation = {
            lat: this.getLocations().latitude,
            lng: this.getLocations().longitude
        };

        return this.getDistanceBetweenPoints(
            usersLocation,
            placeLocation,
            'km'
        ).toFixed(0);
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

getDurationByFeet() {
  let result = Number( this.getDistance() ) / 4;

  if(result < 1) {
    result = result * 60;
    return result.toFixed(0) + ' min';
  }

  else if(result > 24) {
    result = (result / 24);
    return result.toFixed(0) + ' jr'
  }

  return result.toFixed(0) + ' h';
}

getDurationByCar() {
  let result = Number( this.getDistance() ) / 70;

  if(result < 1) {
    result = result * 60;
    return result.toFixed(0) + ' min';
  }

  else if(result > 24) {
    result = (result / 24);
    return result.toFixed(0) + ' jr'
  }

  return result.toFixed(0) + ' h';
}

getBeginDate(): String {
  let eventDate = this.event.beginDate.toLocaleString();
  return eventDate
}

getAthleteCountryFlag(flag) {
  return 'flag-icon flag-icon-' + flag;
}

}
