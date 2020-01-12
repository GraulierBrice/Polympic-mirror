
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
  pathOnClick = '/athletes/';
  constructor(private activatedRoute: ActivatedRoute, private eventsService: EventsService) {
    
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

      if(!this.event.teamEvent) this.pathOnClick = '/athletes';
      else this.pathOnClick = '/teams';
    })
  }

  getAthleteCountryFlag(flag) {
    return 'flag-icon flag-icon-' + flag;
  }

}
