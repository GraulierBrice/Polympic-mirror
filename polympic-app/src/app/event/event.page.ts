import { FavoriteService } from '../services/favorite/favorite.service';

import { Athlete } from '../../models/athlete.model';
import { EventsService } from '../services/events/events.service';

import { Component, OnInit } from '@angular/core';
import { Event } from 'src/models/event.model';
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
  podium: Athlete[];
  isFavorite : boolean;
  pathOnClick = '/athletes/';
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
      if(!paramMap.has('eventId')) {
        //redirect
        return;
      }

      const eventId = Number(paramMap.get('eventId'));
      this.event = this.eventsService.getEvent(eventId);
      
      this.participants = this.eventsService.getParticipantsToEvent(eventId);
      this.winner = this.eventsService.getWinner(this.event.winner);
      this.podium = this.eventsService.getPodiumAthlete(eventId);
      

      if(this.event.eventType.name === 'Solo') this.pathOnClick = '/athletes';
      else if(this.event.eventType.name === 'Team') this.pathOnClick = '/teams';

      
      this.isFavorite = this.favoriteService.isFavorite(this.event);
    })
  }

  getAthleteCountryFlag(flag) {
    return 'flag-icon flag-icon-' + flag;
  }

}
