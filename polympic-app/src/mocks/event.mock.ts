import { Event } from './../app/event.model';

export const EVENTS_MOCKED: Event[] = [
    {
        id: '0',
        name: 'FINALE - 100m Nage libre M',
        image: './assets/natation.jpg',
        type: 'Natation',
        place: 'Piscine Olympique',
        address: '7 Avenue des Castelans, 98000 Paris',
        beginDate: '09-01-2020',
        beginHour: '15h25',
        participants: [1, 0, 3],
        ended: true,
        winner: '0'
      },
      {
        id: '1',
        name: 'FINALE - 200m Athlétisme F',
        image: './assets/athletic.jpg',
        type: 'Athlétisme',
        place: 'Stade Olympique',
        address: '2 Rue Amador Lopez, 06150 Paris',
        beginDate: '14-01-2020',
        beginHour: '17h10',
        participants: [4, 1, 2],
        ended: false,
        winner: undefined
      },
      {
        id: '2',
        name: 'DEMI FINALE - Football',
        image: './assets/football.jpg',
        type: 'Football',
        place: 'Stade Olympique',
        address: '2 Rue Amador Lopez, 06150 Paris',
        beginDate: '20-01-2020',
        beginHour: '11h00',
        participants: [4, 1, 2],
        ended: false,
        winner: undefined
      },
      {
        id: '3',
        name: 'FINALE - Basketball',
        image: './assets/basketball.jpg',
        type: 'Basketball',
        place: 'Stade de Basket',
        address: '2 Rue Amador Lopez, 06150 Paris',
        beginDate: '13-01-2020',
        beginHour: '15h40',
        participants: [4, 1, 2],
        ended: false,
        winner: undefined
      },
      {
        id: '4',
        name: 'DEMI FINALE - 200m Natation F',
        image: './assets/natation.jpg',
        type: 'Natation',
        place: 'Piscine Olympique',
        address: '2 Rue Amador Lopez, 06150 Paris',
        beginDate: '12-01-2020',
        beginHour: '11h35',
        participants: [4, 1, 2],
        ended: false,
        winner: undefined
      }
];