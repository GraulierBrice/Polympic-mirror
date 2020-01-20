import { FavoriteService } from './../favorite.service';
import { Event } from 'src/models/event.model';
import { AthletesService } from './../athletes/athletes.service';
import { TestBed } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage';

import { EventsService } from './events.service';

describe('EventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [IonicStorageModule.forRoot()]
  }));

  it('should be created', () => {
    const service: EventsService = TestBed.get(EventsService);
    expect(service).toBeTruthy();
  });

  it('Should sort 2 events correctly', () => {
    const service: EventsService = TestBed.get(EventsService);
    const event1 = service.getEvent(0);
    const event2 = service.getEvent(2);
    const events = [event1, event2];
    const eventsSorted = [event2, event1];
    service.events = events;
    service.sortEvents();
    expect(service.getAllEvents()).toEqual(eventsSorted);
  })

  it('Should sort 4 events correctly (Terminé, En cours, Bientot, A venir)', () => {
    const service: EventsService = TestBed.get(EventsService);
    const eventAvenir = service.getEvent(0);
    const eventTermine = service.getEvent(2);
    const eventBientot = service.getEvent(5);
    const eventEnCours = service.getEvent(9);

    const events = [eventAvenir, eventTermine, eventBientot, eventEnCours];
    const eventsSorted = [eventTermine, eventEnCours, eventBientot, eventAvenir];

    service.events = events;
    service.sortEvents();
    expect(service.getAllEvents()).toEqual(eventsSorted);
  })

  it('Should return the winner name from event 2', () => {
    const service: EventsService = TestBed.get(EventsService);
    const eventTermine = service.getEvent(2);

    expect(service.getWinner(3).name).toBe('Isabel Quartier');
  })

  it('Should return the 2nd in the podium id from event 2', () => {
    const service: EventsService = TestBed.get(EventsService);
    const athletesService: AthletesService = TestBed.get(AthletesService);

    const athleteName = athletesService.getAthlete( service.getEvent(2).participants[1] ).name;

    expect(service.getPodiumAthlete(2)[0].name).toBe(athleteName);
  })

  it('Should return Christophe Lemaire the name of the 1st participant of event 2', () => {
    const service: EventsService = TestBed.get(EventsService);
    const eventTermine = service.getEvent(2);

    expect(service.getParticipantsToEvent(2)[0].name).toBe('Christophe Lemaire');
  })

  it('Should filter events with wrong input and return an empty array ', () => {
    const service: EventsService = TestBed.get(EventsService);
    service.filterEvents('something wrong');

    expect(service.loadEvents()).toEqual([]);
  })

  it('Should filter events with "Football" and return an array containing Football event', () => {
    const service: EventsService = TestBed.get(EventsService);
    service.filterEvents('Football');
    const footballArray : Event[] = [service.getEvent(0)];

    expect(service.loadEvents()).toEqual(footballArray);
  })


  //Should correct filterEventsByFavorites !!! always returns an array of 5 elements when favorites is empty
/*   it('Should filter events by favorites (user has no favorites in this case)', () => {
    const service: EventsService = TestBed.get(EventsService);
    const favoriteService: FavoriteService = TestBed.get(FavoriteService);
    service.filterEventsByFavorites();
    expect(service.eventsLoader.length).toEqual(0);
    expect(service.eventsLoader).toEqual([]);
  }) */


  it('Should return elements finished', () => {
    const service: EventsService = TestBed.get(EventsService);
    service.filterEvents('Football');
    service.loadFinishedEvents().forEach(event => {
      expect(event.status).toBe('Terminé');
    })
  })

  it('Should return elements en cours', () => {
    const service: EventsService = TestBed.get(EventsService);
    service.filterEvents('Football');
    service.loadEnCoursEvents().forEach(event => {
      expect(event.status).toBe('En cours');
    })
  })

  it('Should return elements bientot', () => {
    const service: EventsService = TestBed.get(EventsService);
    service.filterEvents('Football');
    service.loadBientotEvents().forEach(event => {
      expect(event.status).toBe('Bientot');
    })
  })

  it('Should return elements a venir', () => {
    const service: EventsService = TestBed.get(EventsService);
    service.filterEvents('Football');
    service.loadAvenirEvents().forEach(event => {
      expect(event.status).toBe('A venir');
    })
  })

  it('Should return events of today', () => {
    const service: EventsService = TestBed.get(EventsService);
    service.loadEnCoursEvents().forEach(event => {
      expect(event.status).toBe('En cours');
      expect(event.beginDate.getFullYear().toString()).toBe('2020');
      expect(event.beginDate.getMonth().toString()).toBe('1');
      expect(event.beginDate.getDate().toString()).toBe('11');
    })
  })
});
 