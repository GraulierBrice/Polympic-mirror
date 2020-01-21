import {
  FavoriteService
} from '../services/favorite/favorite.service';

import {
  Athlete
} from '../../models/athlete.model';
import {
  EventsService
} from '../services/events/events.service';

import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  Event
} from 'src/models/event.model';
import {
  ActivatedRoute
} from '@angular/router';

import {
  IonSlides
} from '@ionic/angular';
import {
  ThrowStmt
} from '@angular/compiler';

import {
  Map,
  tileLayer,
  marker
} from 'leaflet';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  @ViewChild('slides', {
    static: true
  }) slider: IonSlides;

  event: Event;
  participants: Athlete[];
  winner: Athlete;
  podium: Athlete[];
  isFavorite: boolean;
  pathOnClick = '/athletes/';
  segment = 0;
  ended: boolean;
  results = [];
  relatedEvents = []
  firstAth: any;
  secondAth: any;
  thirdAth: any;
  eventPos = [];
  map: Map;

  constructor(private activatedRoute: ActivatedRoute, private eventsService: EventsService, private favoriteService: FavoriteService) {

  }

  favoriteEvent() {
    this.favoriteService.addFavorite(this.eventsService.getEvent(this.event.id));
    this.isFavorite = true;
  }

  unfavoriteEvent() {
    this.favoriteService.removeFavorite(this.eventsService.getEvent(this.event.id))
    this.isFavorite = false;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('eventId')) {
        //redirect
        return;
      }

      const eventId = Number(paramMap.get('eventId'));
      this.event = this.eventsService.getEvent(eventId);

      console.log('The event : ')
      console.log(this.event)

      this.participants = this.eventsService.getParticipantsToEvent(eventId);
      this.winner = this.eventsService.getWinner(this.event.winner);
      this.podium = this.eventsService.getPodiumAthlete(eventId);
      this.podium.shift();
      this.ended = (this.event.status === 'Terminé');
      // this.results = this.eventsService.getResultsAthlete(eventId);
      this.results = this.eventsService.getResultsAthlete(eventId);

      this.firstAth = this.results[0];
      this.secondAth = this.results[1];
      this.thirdAth = this.results[2];
      console.log(this.firstAth)
      console.log(this.secondAth)
      console.log(this.thirdAth)

      console.log('related content id :')
      console.log(this.event.relatedContent)

      this.relatedEvents = this.eventsService.getRelatedEvents(this.event.relatedContent)

      console.log('related : ')
      console.log(this.relatedEvents);

      if (this.event.eventType.name === 'Solo') this.pathOnClick = '/athletes';
      else if (this.event.eventType.name === 'Team') this.pathOnClick = '/teams';


      this.isFavorite = this.favoriteService.isFavorite(this.event);

    })
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    this.eventPos = [this.event.place.latitude, this.event.place.longitude];

    console.log(this.eventPos);

    this.map = new Map('map').setView([this.eventPos[0], this.eventPos[1]], 10);

    this.map
      .on('mousedown', function () {
        // console.log('down') 
        // this.slider.lockSwipes(true);
      })
      .on('mouseup', function () {
        //  console.log('up') 
        //  this.slider.lockSwipes(false);
      });

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    marker([this.eventPos[0], this.eventPos[1]]).addTo(this.map)
      .bindPopup(this.event.place.name)
      .openPopup();

  }

  getAthleteCountryFlag(flag) {
    return 'flag-icon flag-icon-' + flag;
  }

  getEventColor(status: String) {
    switch (status) {
      case 'Terminé':
        return "danger";
        break;
      case 'A venir':
        return "medium";
        break;
      case 'En cours':
        return "success";
        break;
      case 'Bientot':
        return "warning";
        break;
    }
  }

  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  }
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
    // if (this.segment !== 2){
    //   this.slider.lockSwipes(false);
    // } else {
    //   this.slider.lockSwipes(true);
    // }
  }

  ngOnDestroy() {
    this.relatedEvents = []
    this.map.remove();
  }

  getBeginDate(): String {
    let eventDate = this.event.beginDate.toLocaleString();
    return eventDate
  }

  changeSlide(slides) {
    slides.slideTo(2);
  }

}