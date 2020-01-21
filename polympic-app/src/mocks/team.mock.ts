import { ATHLETES_MOCKED } from './athlete.mock';
import { Team } from '../models/team.model';
import { COUNTRIES } from './country.mock';

 

export const athletesPerCountry = (countryName: String) => {
  const athletes = ATHLETES_MOCKED;
  return athletes.filter(athlete => {
    return athlete.Country.name === countryName;
  })
}

export const TEAMS_MOCKED: Team[] = [
    {
      category: 'country',
        id: 0,
        image: '../assets/teams/france.png',
        name: 'France',
        Victory: '15',
        Defeat: '7',
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
        Country: COUNTRIES[77],
        Members: athletesPerCountry('France')
    },
    {
      category: 'country',
        id: 1,
        image: '../assets/teams/belgium.png',
        name: 'Belgique',
        Victory: '18',
        Defeat: '8',
        Medals: [
            {
                type: 'Bronze',
                quantity: 3
              },
              {
                type: 'Argent',
                quantity: 4
              },
              {
                type: 'Or',
                quantity: 5
              }
        ],
        Country: COUNTRIES[105],
        Members: athletesPerCountry('Belgium')
    },
    {
      category: 'country',
      id: 2,
      image: '../assets/teams/switzerland.png',
      name: 'Switzerland',
      Victory: '18',
      Defeat: '12',
      Medals: [
          {
              type: 'Bronze',
              quantity: 9
            },
            {
              type: 'Argent',
              quantity: 5
            },
            {
              type: 'Or',
              quantity: 3
            }
      ],
      Country: COUNTRIES[1],
      Members: athletesPerCountry('Switzerland')
  },
    {
      category: 'country',
      id: 3,
      image: '../assets/teams/germany.png',
      name: 'Germany',
      Victory: '18',
      Defeat: '12',
      Medals: [
          {
              type: 'Bronze',
              quantity: 9
            },
            {
              type: 'Argent',
              quantity: 5
            },
            {
              type: 'Or',
              quantity: 3
            }
      ],
      Country: COUNTRIES[79],
      Members: athletesPerCountry('Germany')
  }
]