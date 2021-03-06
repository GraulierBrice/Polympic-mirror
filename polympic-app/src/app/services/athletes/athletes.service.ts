import { Athlete } from '../../../models/athlete.model';
import { Injectable } from '@angular/core';
import { ATHLETES_MOCKED } from '../../../mocks/athlete.mock';

@Injectable({
  providedIn: 'root'
})
export class AthletesService {

  athletes : Athlete[];
  constructor() {
    this.athletes = ATHLETES_MOCKED;
   }

   getAthletes() {
     return this.athletes;
   }

   getAthlete(athleteId: Number) {
    return this.athletes.find(athlete => {
      return athlete.id === athleteId;
    });
  }

  getAthletesPerCountry(country) {
    return this.getAthletes().filter( athlete => {
      return athlete.Country.name === country;
    } )
  }
}
