
import {Event} from '../models/event.model';
import { PLACES_MOCKED } from './place.mock';
import { EVENTSTYPES_MOCKED} from './eventType.mock';

const assets = "../assets/icon/";

export const EVENTS_MOCKED: Event[] = [
    {
        name:"Final de football",
        icon:assets+"football.png",
        place:PLACES_MOCKED[5],
        beginDate:new Date(2020, 1, 11, 16, 45),
        type: 'Football',
        participants: [0, 1, 2],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 0
    },
    {
        name:"Pentathlon qualifications",
        icon:assets+"pentathlon.png",
        place:PLACES_MOCKED[6],
        beginDate:new Date(2020, 1, 11, 12, 0),
        type: 'Pentathlon',
        participants: [4, 5, 12, 6, 10],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 1
    },
    {
        name: '100 m',
        icon: assets+'athletics.png',
        place: PLACES_MOCKED[1],
        beginDate: new Date(2020, 1, 10, 9, 30),
        type: 'Athlétisme',
        participants: [0, 1, 2, 5, 7],
        ended: true,
        winner: 5,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 2
    },
    {
        name: '110m haie',
        icon: assets+'athletics.png',
        place: PLACES_MOCKED[1],
        beginDate: new Date(2020, 1, 10, 15, 0),
        type: 'Athlétisme',
        participants: [4, 8, 9],
        ended: true,
        winner: 9,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 3
    },
    {
        name: 'Lancer de javelot',
        icon: assets+'athletics.png',
        place: PLACES_MOCKED[8],
        beginDate: new Date(2020, 1, 11, 13, 30),
        type: 'Athlétisme',
        participants: [10, 15, 20],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 4
    },
    {
        name: 'Lancer de disque',
        icon: assets+'athletics.png',
        place: PLACES_MOCKED[8],
        beginDate: new Date(2020, 1, 11, 15, 30),
        type: 'Athlétisme',
        participants: [2, 5, 8, 9],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 5
    },
    {
        name: 'Saut en Hauteur',
        icon: assets+'athletics.png',
        place: PLACES_MOCKED[3],
        beginDate: new Date(2020, 1, 11, 10, 0),
        type: 'Athlétisme',
        participants: [2, 7, 8 ,9],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 6
    },
    {
        name: 'Saut à la perche',
        icon: assets+'athletics.png',
        place: PLACES_MOCKED[3],
        beginDate: new Date(2020, 1, 12, 10, 0),
        type: 'Athlétisme',
        participants: [7,15,20,12],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 7
    },
    {
        name: 'Relais 4*100m',
        icon: assets+'athletics.png',
        place: PLACES_MOCKED[1],
        beginDate: new Date(2020, 1, 12, 14, 0),
        participants: [7,15,20,12],
        type: 'Athlétisme',
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 8
    },
    {
        name: '50m nage libre',
        icon: assets+'swimming.png',
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 12, 16, 30),
        type: 'Natation',
        participants: [1,4,3,6],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 9
    },
    {
        name: '150m nage libre',
        icon: assets+'swimming.png',
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 13, 9, 30),
        type: 'Natation',
        participants: [0, 1, 2, 7, 9],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 10
    },
    {
        name: '100m dos',
        icon: assets+'swimming.png',
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 13, 12, 30),
        type: 'Natation',
        participants: [0, 1, 8, 9, 10],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 11
    },
    {
        name: 'Natation Synchronisé',
        icon: assets+'swimming.png',
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 11, 10, 30),
        type: 'Natation',
        participants: [4,5,6,9],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[1],
        id: 12
    },
    {
        name: 'Taekwondo',
        icon: assets+'taekwondo.png',
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 11, 9, 0),
        type: 'Taekwondo',
        participants: [7, 6 ,3, 8],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 13
    },
    {
        name: 'Judo',
        icon: assets+'judo.png',
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 12, 9, 0),
        type: 'Judo',
        participants: [1, 5, 4, 6],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 14
    },
    {
        name: 'Karaté-Combat',
        icon: assets+'karatekumite.png',
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 13, 9, 0),
        type: 'Karate',
        participants: [4, 5, 6, 2, 0, 1],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 15
    },
    {
        name: 'Karate-Kata',
        icon: assets+'karatekata.png',
        place: PLACES_MOCKED[2],
        beginDate: new Date(2020, 1, 13, 14, 0),
        type: 'Karate',
        participants: [0, 1, 3, 5, 7],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 16
    },
    {
        name: 'Escrime',
        icon: assets+'fencing.png',
        place: PLACES_MOCKED[4],
        beginDate: new Date(2020, 1, 11, 10, 0),
        type: 'Escrime',
        participants: [7, 6, 17, 20, 21],
        ended: false,
        winner: undefined,
        eventType: EVENTSTYPES_MOCKED[0],
        id: 17
    },
]
