import { Country } from '../models/country.model';
import { Team } from '../models/team.model';
export const TEAMS_MOCKED: Team[] = [
    {
        id: '0',
        image: '../assets/teams/psg.jpg',
        name: 'P.S.G.',
        sport: 'Football',
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
            name: 'France',
            flag: 'fr'
        },
        Members: [0, 1]
    },
    {
        id: '1',
        image: '../assets/teams/om.jpg',
        name: 'O.M.',
        sport: 'Football',
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
            name: 'France',
            flag: 'fr'
        },
        Members: [0, 1]
    }
]