import {Event} from '../models/event';
import { PLACES_MOCKED } from './place.mock';

export const EVENTS_MOCKED: Event[] = [
    {
        name:"Final de football",
        icon:"football.png",
        place:PLACES_MOCKED[5],
        start:new Date(2020, 1, 11, 16, 45),
    },
    {
        name:"Pentathlon qualifications",
        icon:"pentathlon.png",
        place:PLACES_MOCKED[6],
        start:new Date(2020, 1, 11, 12, 0),
    },
    {
        name: '100 m',
        icon: 'athletics.png',
        place: PLACES_MOCKED[1],
        start: new Date(2020, 1, 11, 9, 30),
    },
    {
        name: '110 m haie',
        icon: 'athletics.png',
        place: PLACES_MOCKED[1],
        start: new Date(2020, 1, 11, 15, 0),
    },
    {
        name: '110 m haie',
        icon: 'athletics.png',
        place: PLACES_MOCKED[1],
        start: new Date(2020, 1, 11, 15, 0),
    },
    {
        name: 'lancer de javelot',
        icon: 'athletics.png',
        place: PLACES_MOCKED[8],
        start: new Date(2020, 1, 11, 13, 30),
    },
    {
        name: 'Lancer de disque',
        icon: 'athletics.png',
        place: PLACES_MOCKED[8],
        start: new Date(2020, 1, 11, 15, 30),
    },
    {
        name: 'Saut en Hauteur',
        icon: 'athletics.png',
        place: PLACES_MOCKED[3],
        start: new Date(2020, 1, 11, 10, 0),
    },
    {
        name: 'Saut à la perche',
        icon: 'athletics.png',
        place: PLACES_MOCKED[3],
        start: new Date(2020, 1, 12, 10, 0),
    },
    {
        name: 'Relais 4*100m',
        icon: 'athletics.png',
        place: PLACES_MOCKED[1],
        start: new Date(2020, 1, 12, 14, 0),
    },
    {
        name: '50m nage libre',
        icon: 'swimming.png',
        place: PLACES_MOCKED[4],
        start: new Date(2020, 1, 12, 16, 30),
    },
    {
        name: '150m nage libre',
        icon: 'swimming.png',
        place: PLACES_MOCKED[4],
        start: new Date(2020, 1, 13, 9, 30),
    },
    {
        name: '100m dos',
        icon: 'swimming.png',
        place: PLACES_MOCKED[4],
        start: new Date(2020, 1, 13, 12, 30),
    },
    {
        name: 'Natation Synchronisé',
        icon: 'swimming.png',
        place: PLACES_MOCKED[4],
        start: new Date(2020, 1, 11, 10, 30),
    },
    {
        name: 'Taekwondo',
        icon: 'taekwondo.png',
        place: PLACES_MOCKED[2],
        start: new Date(2020, 1, 11, 9, 0),
    },
    {
        name: 'Judo',
        icon: 'judo.png',
        place: PLACES_MOCKED[2],
        start: new Date(2020, 1, 12, 9, 0),
    },
    {
        name: 'Karaté-Combat',
        icon: 'karate.png',
        place: PLACES_MOCKED[2],
        start: new Date(2020, 1, 13, 9, 0),
    },
    {
        name: 'Karate-Kata',
        icon: 'karate.png',
        place: PLACES_MOCKED[2],
        start: new Date(2020, 1, 13, 14, 0),
    },
    {
        name: 'Escrime',
        icon: 'fencing.png',
        place: PLACES_MOCKED[4],
        start: new Date(2020, 1, 11, 10, 0),
    },

];