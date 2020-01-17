import { FavoriteService } from '../services/favorite.service';

import { Athlete } from '../../models/athlete.model';
import { EventsService } from '../services/events/events.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from 'src/models/event.model';
import { ActivatedRoute } from '@angular/router';

import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides; 

  event : Event;
  participants : Athlete[];
  winner: Athlete;
  podium: Athlete[];
  isFavorite : boolean;
  pathOnClick = '/athletes/';
  segment = 0;  
  ended: boolean;
  results: any;

  constructor(private activatedRoute: ActivatedRoute, private eventsService: EventsService, private favoriteService: FavoriteService) {
      
   }

   favoriteEvent() {
    this.favoriteService.favoriteCompet(this.event.id).then(() => {
      this.isFavorite = true;
    });
  }
 
  unfavoriteEvent() {
    this.favoriteService.unfavoriteCompet(this.event.id).then(() => {
      this.isFavorite = false;
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('eventId')) {
        //redirect
        return;
      }

      const eventId = Number(paramMap.get('eventId'));
      this.event = this.eventsService.getEvent(eventId);

      console.log(this.event)
      
      this.participants = this.eventsService.getParticipantsToEvent(eventId);
      this.winner = this.eventsService.getWinner(this.event.winner);
      this.podium = this.eventsService.getPodiumAthlete(eventId);
      this.podium.shift();
      this.ended = this.event.status === 'Terminé';
      this.results = this.eventsService.getResultsAthlete(eventId);

      console.log(this.results);

      if(this.event.eventType.name === 'Solo') this.pathOnClick = '/athletes';
      else if(this.event.eventType.name === 'Team') this.pathOnClick = '/teams';

      this.favoriteService.isFavoriteCompet(eventId).then(isFav => {
        this.isFavorite = isFav;
      })
    })
  }

  getAthleteCountryFlag(flag) {
    return 'flag-icon flag-icon-' + flag;
  }

  getEventColor(status: String) {
    switch(status) {
      case 'Terminé': return "danger"; break;
      case 'A venir': return "medium"; break;
      case 'En cours': return "success"; break;
      case 'Bientot': return "warning"; break;
    }
  }

  async segmentChanged(ev: any) {  
    await this.slider.slideTo(this.segment);  
  }  
  async slideChanged() {  
    this.segment = await this.slider.getActiveIndex();  
  }  

}