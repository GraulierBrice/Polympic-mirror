import { Athlete } from '../models/athlete.model';
export const ATHLETES_MOCKED : Athlete[] = [
  {
    category: 'athlete',
    id: 0,
    image: '../assets/athletes/nicolas.jpg',
    name: 'Renaud Lavillenie',
    sport: 'Athlétisme',
    Victory: '9',
    Defeat: '2',
    Medals: [
      {
        type: 'Bronze',
        quantity: 3
      },
      {
        type: 'Argent',
        quantity: 1
      },
      {
        type: 'Or',
        quantity: 3
      }
    ],
    Country: 
      {
        id: '0',
        name: 'France',
        flag: 'fr',
        category: 'country',
      }
    
  },
    {
      category: 'athlete',
        id: 1,
        image: '../assets/athletes/mbappe.jpg',
        name: 'Christophe Lemaire',
        sport: 'Athlétisme',
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
            id: '0',
            name: 'France',
            flag: 'fr',
            category: 'country',
          }
        
      },
      {
        category: 'athlete',
        id: 2,
        image: '../assets/athletes/jonas.jpg',
        name: 'Mathieu Legrand',
        sport: 'Athlétisme',
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
            id: '1',
            name: 'Belgium',
            flag: 'be',
            category: 'country',
          }    
      },
      {
        category: 'athlete',
        id: 3,
        image: '../assets/athletes/meuf.jpg',
        name: 'Isabel Quartier',
        sport: 'Athlétisme',
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
            id: '2',
            name: 'Switzerland',
            flag: 'ch',
            category: 'country',
          }    
      },
      {
        category: 'athlete',
        id: 4,
        image: '../assets/athletes/barbu.jpg',
        name: 'Robert lacroix',
        sport: 'Football',
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
            id: '1',
            name: 'Belgium',
            flag: 'be',
            category: 'country',
          }    
      }
]