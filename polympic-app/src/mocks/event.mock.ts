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
        beginDate: '09-01-2020',
        beginHour: '17h10',
        participants: [4, 1, 2],
        ended: false,
        winner: undefined
      }
];