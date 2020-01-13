import { Country } from './../app/country.model';
import { Team } from './../app/team.model';
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
        Members: [0, 1]
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
        Members: [0, 1]
    }
]