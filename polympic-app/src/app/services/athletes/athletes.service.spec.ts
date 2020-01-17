import { Athlete } from './../../../models/athlete.model';
import { TestBed } from '@angular/core/testing';

import { AthletesService } from './athletes.service';

describe('AthletesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AthletesService = TestBed.get(AthletesService);
    expect(service).toBeTruthy();
  });

  it('should return Renaud Lavillenie', () => {
    const service: AthletesService = TestBed.get(AthletesService);
    expect(service.getAthlete(0).name).toBe('Renaud Lavillenie');
  })

  it('should return the Athlete Isabel Quartier', () => {
    const service: AthletesService = TestBed.get(AthletesService);
    const athletes: Athlete[] = [service.getAthlete(3)];
    expect(service.getAthletesPerCountry('Switzerland')).toEqual(athletes);
  })
});
