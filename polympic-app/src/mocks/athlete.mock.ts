import {
  Athlete
} from '../models/athlete.model';
import {
  COUNTRIES
} from './country.mock';

export const ATHLETES_MOCKED: Athlete[] = [{
    category: 'athlete',
    age: 28,
    sexe: 'male',
    id: 0,
    image: '../assets/athletes/nicolas.jpg',
    name: 'Renaud Lavillenie',
    sport: 'Athlétisme',
    Victory: '9',
    Defeat: '2',
    Medals: [{
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
    Country: COUNTRIES[77]

  },
  {
    category: 'athlete',
    age: 28,
    sexe: 'male',
    id: 1,
    image: '../assets/athletes/mbappe.jpg',
    name: 'Christophe Lemaire',
    sport: 'Athlétisme',
    Victory: '15',
    Defeat: '9',
    Medals: [{
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
    Country: COUNTRIES[1]

  },
  {
    category: 'athlete',
    age: 28,
    sexe: 'male',
    id: 2,
    image: '../assets/athletes/jonas.jpg',
    name: 'Mathieu Legrand',
    sport: 'Athlétisme',
    Victory: '7',
    Defeat: '11',
    Medals: [{
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
    Country: COUNTRIES[74]
  },
  {
    category: 'athlete',
    age: 28,
    sexe: 'female',
    id: 3,
    image: '../assets/athletes/meuf.jpg',
    name: 'Isabel Quartier',
    sport: 'Athlétisme',
    Victory: '11',
    Defeat: '15',
    Medals: [{
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
    Country: COUNTRIES[77]
  },
  {
    category: 'athlete',
    age: 28,
    sexe: 'male',
    id: 4,
    image: '../assets/athletes/barbu.jpg',
    name: 'Robert lacroix',
    sport: 'Football',
    Victory: '12',
    Defeat: '7',
    Medals: [{
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
    Country: COUNTRIES[72]
  },
  {
    id: 5,
    category: 'athlete',
    age: 24,
    sexe: 'male',
    image: '../assets/athletes/5.jpg',
    name: 'Marc Dumont',
    sport: 'Football',
    Victory: '1',
    Defeat: '0',
    Medals: [{
        type: 'Bronze',
        quantity: 1
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
    Country: COUNTRIES[72]
  },
  {
    id: 6,
    category: 'athlete',
    age: 23,
    sexe: 'male',
    image: '../assets/athletes/6.jpg',
    name: 'Philipe Strauss',
    sport: 'Athlétisme',
    Victory: '2',
    Defeat: '0',
    Medals: [{
        type: 'Bronze',
        quantity: 1
      },
      {
        type: 'Argent',
        quantity: 1
      },
      {
        type: 'Or',
        quantity: 0
      }
    ],
    Country: COUNTRIES[79]
  },
  {
    id: 7,
    category: 'athlete',
    age: 25,
    sexe: 'male',
    image: '../assets/athletes/7.jpg',
    name: 'Joao Miranda',
    sport: 'Athlétisme',
    Victory: '0',
    Defeat: '2',
    Medals: [{
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
    Country: COUNTRIES[30]
  },
  {
    id: 8,
    category: 'athlete',
    age: 27,
    sexe: 'male',
    image: '../assets/athletes/8.jpg',
    name: 'James Trond',
    sport: 'Athlétisme',
    Victory: '7',
    Defeat: '2',
    Medals: [{
        type: 'Bronze',
        quantity: 2
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
    Country: COUNTRIES[229]
  },
  {
    id: 9,
    category: 'athlete',
    age: 24,
    sexe: 'female',
    image: '../assets/athletes/9.jpg',
    name: 'Lara Deridifi',
    sport: 'Natation',
    Victory: '12',
    Defeat: '7',
    Medals: [{
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
    Country: COUNTRIES[106]
  },
  {
    id: 10,
    category: 'athlete',
    age: 21,
    sexe: 'male',
    image: '../assets/athletes/10.jpg',
    name: 'Franz Hastrupen',
    sport: 'Football',
    Victory: '6',
    Defeat: '4',
    Medals: [{
        type: 'Bronze',
        quantity: 3
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
    Country: COUNTRIES[79]
  },
  {
    id: 11,
    category: 'athlete',
    age: 19,
    sexe: 'male',
    image: '../assets/athletes/11.jpg',
    name: 'Jean Maillot',
    sport: 'Athlétisme',
    Victory: '2',
    Defeat: '2',
    Medals: [{
        type: 'Bronze',
        quantity: 0
      },
      {
        type: 'Argent',
        quantity: 1
      },
      {
        type: 'Or',
        quantity: 1
      }
    ],
    Country: COUNTRIES[72]
  }
]