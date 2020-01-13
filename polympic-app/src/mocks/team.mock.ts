import { ATHLETES_MOCKED } from './athlete.mock';
import { AthletesService } from './../app/services/athletes/athletes.service';
import { Country } from './../app/country.model';
import { Team } from './../app/team.model';
 

export const athletesPerCountry = (countryName: String) => {
  const athletes = ATHLETES_MOCKED;
  return athletes.filter( athlete => {
    return athlete.Country.name === countryName;
  } )
}

export const TEAMS_MOCKED: Team[] = [
    {
        id: '0',
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
        Country: {
            id: '0',
            name: 'France',
            flag: 'fr'
        },
        Members: athletesPerCountry('France')
    },
    {
        id: '1',
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
        Country: {
            id: '1',
            name: 'Belgique',
            flag: 'be'
        },
        Members: athletesPerCountry('Belgium')
    },
    {
      id: '2',
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
      Country: {
          id: '2',
          name: 'Switzerland',
          flag: 'ch'
      },
      Members: athletesPerCountry('Switzerland')
  }
]