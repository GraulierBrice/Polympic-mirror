import { FavoriteService } from './../favorite.service';

import { Athlete } from '../athlete.model';
import { EventsService } from '../services/events/events.service';

import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/event.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {


  event : Event;
  participants : Athlete[];
  winner: Athlete;
  isFavorite : boolean;
  pathOnClick = '/athletes/';
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

      const eventId = paramMap.get('eventId');
      this.event = this.eventsService.getEvent(eventId);
      
      this.participants = this.eventsService.getParticipantsToEvent(eventId);
      this.winner = this.eventsService.getWinner(this.event.winner);

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

}
