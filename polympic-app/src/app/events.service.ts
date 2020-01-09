import { AthletesService } from './athletes.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events = [
    {
      id: '0',
      name: 'FINALE - 100m Nage libre M',
      image: './assets/natation.jpg',
      type: 'Natation',
      place: 'Piscine Olympique',
      beginDate: '09-01-2020',
      beginHour: '15h25',
      participants: [1, 0, 3],
      ended: true,
      winner: '0'
    },
    {
      id: '1',
      name: 'FINALE - 200m Athlétisme F',
      image: './assets/athletic.jpg',
      type: 'Athlétisme',
      place: 'Stade Olympique',
      beginDate: '09-01-2020',
      beginHour: '17h10',
      participants: [4, 1, 2],
      ended: false,
      winner: undefined
    }
  ]

  constructor(private athletesService : AthletesService) { 
  }


  getAllEvents() {
    return [...this.events];
  }

  getEvent(eventId: String) {
    return {...this.events.find(event => {
      return event.id === eventId;
    })}
  }

  getParticipantsToEvent(eventId: String) {
    const event = this.getEvent(eventId);

    var arr = this.athletesService.getAthletes().filter(function(item) {
      return event.participants.indexOf(Number(item.id)) !== -1;
    });

    return arr;
  }

  getWinner(winnerId: String) {
    return this.athletesService.getAthletes().find(athlete => {
      return athlete.id === winnerId;
    })
  }


}
