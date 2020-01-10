
import {Event} from '../models/event';
import { PLACES_MOCKED } from './place.mock';

export const EVENTS_MOCKED: Event[] = [
    {
        name:"Final de football",
        icon:"football.png",
        place:PLACES_MOCKED[5],
        beginDate:new Date(2020, 1, 11, 16, 45),
        type: 'Football',
        participants: [0, 1, 2],
        ended: false,
        winner: undefined,
        id: 0
    },
    {
        name:"Pentathlon qualifications",
        icon:"pentathlon.png",
        place:PLACES_MOCKED[6],
        beginDate:new Date(2020, 1, 11, 12, 0),
        type: 'Pentathlon',
        participants: [4, 5, 12, 6, 10],
        ended: false,
        winner: undefined,
        id: 1
    },
    {
        name: '100 m',
        icon: 'athletics.png',
        place: PLACES_MOCKED[1],
        beginDate: new Date(2020, 1, 10, 9, 30),
        type: 'Athlétisme',
        participants: [0, 1, 2, 5, 7],
        ended: true,
        winner: 5,
        id: 2
    },
    {
        name: '110m haie',
        icon: 'athletics.png',
        place: PLACES_MOCKED[1],
        beginDate: new Date(2020, 1, 10, 15, 0),
        type: 'Athlétisme',
        participants: [4, 8, 9],
        ended: true,
        winner: 9,
        id: 3
    },
    {
        name: 'Lancer de javelot',
        icon: 'athletics.png',
        place: PLACES_MOCKED[8],
        beginDate: new Date(2020, 1, 11, 13, 30),
        type: 'Athlétisme',
        participants: [10, 15, 20],
        ended: false,
        winner: undefined,
        id: 4
    },
    {
        name: 'Lancer de disque',
        icon: 'athletics.png',
        place: PLACES_MOCKED[8],
        beginDate: new Date(2020, 1, 11, 15, 30),
        type: 'Athlétisme',
        participants: [2, 5, 8, 9],
        ended: false,
        winner: undefined,
        id: 5
    },
    {
        name: 'Saut en Hauteur',
        icon: 'athletics.png',
        place: PLACES_MOCKED[3],
        beginDate: new Date(2020, 1, 11, 10, 0),
        type: 'Athlétisme',
        participants: [2, 7, 8 ,9],
        ended: false,
        winner: undefined,
        id: 6
    },
    {
        name: 'Saut à la perche',
        icon: 'athletics.png',
        place: PLACES_MOCKED[3],
        beginDate: new Date(2020, 1, 12, 10, 0),
        type: 'Athlétisme',
        participants: [7,15,20,12],
        ended: false,
        winner: undefined,
        id: 7
    },
    {
        name: 'Relais 4*100m',
        icon: 'athletics.png',
        place: PLACES_MOCKED[1],
        beginDate: new Date(2020, 1, 12, 14, 0),
        type: 'Athlétisme',
        participants: [10,11,12,15,17],
        ended: false,
        winner: undefined,
        id: 8
    },
    {
        name: '50m nage libre',
        icon: 'swimming.png',
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 12, 16, 30),
        type: 'Natation',
        participants: [1,4,3,6],
        ended: false,
        winner: undefined,
        id: 9
    },
    {
        name: '150m nage libre',
        icon: 'swimming.png',
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 13, 9, 30),
        type: 'Natation',
        participants: [0, 1, 2, 7, 9],
        ended: false,
        winner: undefined,
        id: 10
    },
    {
        name: '100m dos',
        icon: 'swimming.png',
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 13, 12, 30),
        type: 'Natation',
        participants: [0, 1, 8, 9, 10],
        ended: false,
        winner: undefined,
        id: 11
    },
    {
        name: 'Natation Synchronisé',
        icon: 'swimming.png',
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 11, 10, 30),
        type: 'Natation',
        participants: [4,5,6,9],
        ended: false,
        winner: undefined,
        id: 12
    },
    {
        name: 'Taekwondo',
        icon: 'taekwondo.png',
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 11, 9, 0),
        type: 'Taekwondo',
        participants: [7, 6 ,3, 8],
        ended: false,
        winner: undefined,
        id: 13
    },
    {
        name: 'Judo',
        icon: 'judo.png',
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 12, 9, 0),
        type: 'Judo',
        participants: [1, 5, 4, 6],
        ended: false,
        winner: undefined,
        id: 14
    },
    {
        name: 'Karaté-Combat',
        icon: 'karate.png',
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 13, 9, 0),
        type: 'Karate',
        participants: [4, 5, 6, 2, 0, 1],
        ended: false,
        winner: undefined,
        id: 15
    },
    {
        name: 'Karate-Kata',
        icon: 'karate.png',
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 13, 14, 0),
        type: 'Karate',
        participants: [0, 1, 3, 5, 7],
        ended: false,
        winner: undefined,
        id: 16
    },
    {
        name: 'Escrime',
        icon: 'fencing.png',
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 11, 10, 0),
        type: 'Escrime',
        participants: [7, 6, 17, 20, 21],
        ended: false,
        winner: undefined,
        id: 17
    },
]
