import { Athlete } from './athlete.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AthletesService {

  athletes : Athlete[];
  constructor() {
    this.athletes = [
      {
        id: '0',
        image: '../assets/athletes/mbappe.jpg',
        name: 'Christophe Lemaire',
        sport: 'Athlète',
        Victory: '15',
        Defeat: '9',
        Medals: [
          {
            type: 'Bronze',
            quantity: 1
          },
          {
            type: 'Argent',
            quantity: 1
          },
          {
            type: 'Or',
            quantity: 2
          }
        ],
        Country: 
          {
            name: 'France',
            flag: 'fa'
          }
        
      },
      {
        id: '1',
        image: '../assets/athletes/jonas.jpg',
        name: 'Mathieu Legrand',
        sport: 'Athlète',
        Victory: '7',
        Defeat: '11',
        Medals: [
          {
            type: 'Bronze',
            quantity: 0
          },
          {
            type: 'Argent',
            quantity: 0
          },
          {
            type: 'Or',
            quantity: 0
          }
        ],
        Country: 
          {
            name: 'Belgium',
            flag: 'be'
          }    
      },
      {
        id: '3',
        image: '../assets/athletes/meuf.jpg',
        name: 'Isabel Quartier',
        sport: 'Athlète',
        Victory: '11',
        Defeat: '15',
        Medals: [
          {
            type: 'Bronze',
            quantity: 7
          },
          {
            type: 'Argent',
            quantity: 3
          },
          {
            type: 'Or',
            quantity: 0
          }
        ],
        Country: 
          {
            name: 'Switzerland',
            flag: 'sz'
          }    
      },
      {
        id: '4',
        image: '../assets/athletes/barbu.jpg',
        name: 'Robert lacroix',
        sport: 'Athlète',
        Victory: '12',
        Defeat: '7',
        Medals: [
          {
            type: 'Bronze',
            quantity: 5
          },
          {
            type: 'Argent',
            quantity: 3
          },
          {
            type: 'Or',
            quantity: 1
          }
        ],
        Country: 
          {
            name: 'Belgium',
            flag: 'be'
          }    
      }
    ]
   }

   getAthletes() {
     return [...this.athletes];
   }

   getAthlete(athleteId: String) {
    return {...this.athletes.find(athlete => {
      return athlete.id === athleteId;
    })}
  }
}
