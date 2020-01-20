import { EventsService } from '../events/events.service';
import { TestBed } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage';

import { SportsFilterService } from './sports-filter.service';
import { EVENTSTYPES_MOCKED } from 'src/mocks/eventType.mock';

describe('SportsFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [IonicStorageModule.forRoot()]
  }));

  it('should be created', () => {
    const service: SportsFilterService = TestBed.get(SportsFilterService);
    expect(service).toBeTruthy();
  });

  it('should filter nothing and return an array full of events', () => {
    const service: SportsFilterService = TestBed.get(SportsFilterService);
    const eventService: EventsService = TestBed.get(EventsService);
    service.setSportsFilter([]);
    service.setSportsSelected([]);

    service.launchFilter();
    expect(service.getEventsService().getAllEvents().length).toBe(17);
  });


  it('should filter on team events and return the 1st team event id 0 and 2nd id 8', () => {
    const service: SportsFilterService = TestBed.get(SportsFilterService);
    const eventService: EventsService = TestBed.get(EventsService);
    service.setEventTypesSelected( [EVENTSTYPES_MOCKED[0]] );
    service.launchFilter();

    expect(service.getEventsService().getAllEvents()[0].id).toBe(0);
    expect(service.getEventsService().getAllEvents()[1].id).toBe(8);
    expect(service.getEventsService().getAllEvents()[2]).toBeUndefined();
  });
});
